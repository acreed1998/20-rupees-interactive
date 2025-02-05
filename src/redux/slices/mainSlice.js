import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rupees: 20,
  openSections: [],
  selectedChoices: [],
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
    setSelectedChoices: (state, action) => {
      state.selectedChoices = [...action.payload];
    },
    removeFiGuide: (state) => {
      state.selectedChoices = [
        ...state.selectedChoices.filter(
          (choice) => choice?.title !== "Guide" || choice?.cost !== 1
        ),
      ];
    },
  },
});

export const { setOpenSections, setRupees, setSelectedChoices, removeFiGuide } =
  mainSlice.actions;

export default mainSlice.reducer;
