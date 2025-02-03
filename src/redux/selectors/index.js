import { createSelector } from "@reduxjs/toolkit";

export const getState = (state) => {
  return state?.main ?? {};
};

export const getRupees = createSelector(getState, (state) => {
  return state?.rupees ?? 0;
});
