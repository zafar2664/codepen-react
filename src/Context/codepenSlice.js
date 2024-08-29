// codepenSlice.js
import { createSlice } from '@reduxjs/toolkit';

const codepenSlice = createSlice({
  name: 'codepen',
  initialState: {
    value: 0, // Example state
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = codepenSlice.actions;
export default codepenSlice.reducer;
