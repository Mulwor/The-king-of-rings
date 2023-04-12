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

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
    setSearchResult(state, { payload }: PayloadAction<CharacterItem[]>) {
      state.results = payload;
    },
  },
});

export const { setSearchValue, setSearchResult } = searchSlice.actions;

export default searchSlice.reducer;
