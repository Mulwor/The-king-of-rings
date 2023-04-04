import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const searchTextSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
});

// export const { searchSlice } = searchSlice.actions;

export default searchTextSlice.reducer;
