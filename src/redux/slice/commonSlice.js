/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isDarkMode: true,
    isLoading: false,
    isLoadMore: false,
    language: 'en',
    lastPage: true,
  },
  reducers: {
    toggleTheme: state => {
      state.isDarkMode = !state.isDarkMode;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsLoadMore: (state, action) => {
      state.isLoadMore = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },

  },
});

export const {toggleTheme, setIsLoading,setIsLoadMore, setLanguage, setLastPage} = commonSlice.actions;
export default commonSlice.reducer;
