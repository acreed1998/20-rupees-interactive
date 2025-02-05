import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rupees: 20,
  openSections: [],
  selectedChoices: [],
  dialogOpen: false,
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
    toggleDialogOpen: (state) => {
      state.dialogOpen = !state.dialogOpen;
    },
  },
});

export const {
  setOpenSections,
  setRupees,
  setSelectedChoices,
  removeFiGuide,
  toggleDialogOpen,
} = mainSlice.actions;

export default mainSlice.reducer;
