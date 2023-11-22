import {useMutation, useQuery} from 'react-query';

// Fetching data
export function useDataFetching(key, getData, params) {
  return useQuery(key, async () => {
    const response = await getData(params);

    if (response.ok) {
      if (
        response.headers['content-type'] &&
        response.headers['content-type'].includes('text/html')
      ) {
        throw new Error('Received HTML instead of expected JSON data');
      }
      return response.data;
    }
    throw new Error('Something went wrong');
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
