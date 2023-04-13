import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormItem } from 'data/types';

interface State {
  results: FormItem[];
}

const initialState: State = {
  results: [],
};

const cardSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    generateCard(state, { payload }: PayloadAction<FormItem>) {
      state.results.push(payload);
    },
  },
});

export const { generateCard } = cardSlice.actions;

export default cardSlice.reducer;
