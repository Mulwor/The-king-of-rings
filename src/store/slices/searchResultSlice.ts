import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharacterItem } from 'data/types';

interface State {
  searchValue: string;
  results: CharacterItem[];
}

const initialState: State = {
  searchValue: '',
  results: [],
};

const searchResultSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
  },
});

export const { setSearchValue } = searchResultSlice.actions;

export default searchResultSlice.reducer;
