/* eslint-disable curly */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import {useMutation, useQuery} from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoadMore, setIsLoading } from '../redux/slice/commonSlice';
import { useEffect, useState } from 'react';

// Fetching data
export function useDataFetching(key, getData, params = {}, cate) {
  const dispatch = useDispatch();
  const { isLoadMore } = useSelector(state => state.common);
  const [data, setData] = useState([]);

  return useQuery(key, async () => {
    !isLoadMore && dispatch(setIsLoading(true));

    if(params?.page === 1)  {dispatch(setIsLoadMore(false));}
    if (params?.page > 1) {dispatch(setIsLoadMore(true));}

    const response = await getData(params);

    if (response.ok) {
      if (
        response.headers['content-type'] &&
        response.headers['content-type'].includes('text/html')
      ) {
        throw new Error('Received HTML instead of expected JSON data');
      }

      let newData;
      if ( params?.page === 1) {
        setData(response.data);
        if(cate) {
          newData = [{id: 'all', name: 'All'}, ...response.data];
        }
        else {
          newData = response.data;
        }
      }
       else {
        // If response.data is an empty array or not an array, keep the existing data
        if (response.data.length === 0 || !Array.isArray(response.data)) {
          dispatch(setIsLoading(false));
          newData = [...data];
        }
        // If response.data is an array and has elements, update the state
        if (Array.isArray(response.data) && response.data.length > 0) {
          const uniqueData = response.data.filter(res => !data.some(item => item.id === res.id));
          setData(prev => [...prev, ...uniqueData]);
          newData = [...data, ...uniqueData];
        }
      }

      !isLoadMore && dispatch(setIsLoading(false));
      return newData;
    }

    !isLoadMore && dispatch(setIsLoading(false));
    dispatch(setIsLoadMore(false));
    throw new Error('Something went wrong');
  }, {
    refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // staleTime: Infinity,
    cacheTime: 2000,
    staleTime: 5000,

  });
}


// For form data
export function UseMutationHook(method) {
  return useMutation({
    mutationFn: async values => {
      return await method(values);
    },
  });
}
