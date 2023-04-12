import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import cardSlice from './slices/cardSlice';
import { apiSlice } from './slices/apiSlice';

export const store = configureStore({
  reducer: {
    searchText: searchSlice,
    generateCard: cardSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([apiSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
