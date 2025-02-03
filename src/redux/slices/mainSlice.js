import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rupees: 20,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = mainSlice.actions;
export default mainSlice.reducer;
