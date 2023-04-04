import { configureStore } from '@reduxjs/toolkit';
import searchResultSlice from './slices/searchResultSlice';
import searchTextSlice from './slices/searchTextSlice';

export const store = configureStore({
  reducer: {
    searchResult: searchResultSlice,
    searchText: searchTextSlice,
  },
});
