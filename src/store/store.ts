import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import cardSlice from './slices/cardSlice';

export const store = configureStore({
  reducer: {
    searchText: searchSlice,
    generateCard: cardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
