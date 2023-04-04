import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const searchResultSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
});

// export const { searchSlice } = searchSlice.actions;

export default searchResultSlice.reducer;
