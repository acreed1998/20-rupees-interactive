import { createSelector } from "@reduxjs/toolkit";

export const getState = (state) => {
  return state?.main ?? {};
};

export const getRupees = createSelector(getState, (state) => {
  return Number(state?.rupees ?? 0);
});

export const getOpenSections = createSelector(getState, (state) => {
  return [...(state?.openSections ?? [])];
});
