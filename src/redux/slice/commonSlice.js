import {createSlice} from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isDarkMode: false,
    isLoading: false,
    language: 'en',
  },
  reducers: {
    toggleTheme: state => {
      state.isDarkMode = !state.isDarkMode;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLanguage: (state, actions) => {
      state.language = actions.payload;
    },
  },
});

export const {toggleTheme, setIsLoading, setLanguage} = commonSlice.actions;
export default commonSlice.reducer;
