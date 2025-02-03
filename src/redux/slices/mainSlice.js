import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rupees: 20,
  openSections: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setRupees: (state, action) => {
      state.rupees = action.payload;
    },
    setOpenSections: (state, action) => {
      state.openSections = [...action.payload];
    },
  },
});

export const { setOpenSections, setRupees } = mainSlice.actions;

export default mainSlice.reducer;
