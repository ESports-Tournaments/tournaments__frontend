import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrememt: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const exampleReducer = exampleSlice.reducer;
export const exampleActions = exampleSlice.actions;
