import { createSelector } from "@reduxjs/toolkit";
import pluralize from "pluralize";

export const getState = (state) => {
  return state?.main ?? {};
};

export const getRupees = createSelector(getState, (state) => {
  return Number(state?.rupees ?? 0);
});

export const getOpenSections = createSelector(getState, (state) => {
  return [...(state?.openSections ?? [])];
});

export const getOpenSectionsInSortedOrder = createSelector(
  getOpenSections,
  (openSections) => {
    return openSections
      .sort((sectionKeyA, sectionKeyB) => {
        const matcher = /^\d+/;
        return (
          (sectionKeyA?.match(matcher)?.[0] ?? 0) -
          (sectionKeyB?.match(matcher)?.[0] ?? 0)
        );
      })
      .reverse();
  }
);

export const getSelectedChoices = createSelector(getState, (state) => {
  return [...(state?.selectedChoices ?? [])];
});

export const getSelectedChoicesTitles = createSelector(
  getSelectedChoices,
  (choices) => {
    return [...(choices?.map((choice) => choice?.title ?? "") ?? [])];
  }
);

export const getSelectedChoicesWithDiscounts = createSelector(
  getSelectedChoices,
  (selectedChoices) => {
    return [...selectedChoices.filter((choice) => !!choice?.discount)];
  }
);

export const getSelectedChoicesWithDiscountsMet = createSelector(
  getSelectedChoicesWithDiscounts,
  getSelectedChoicesTitles,
  (selectedChoices, selectedChoicesTitles) => {
    return [
      ...selectedChoices.filter((choice) =>
        selectedChoicesTitles.includes(choice?.discount?.requirement)
      ),
    ];
  }
);

export const getDiscountsTotal = createSelector(
  getSelectedChoicesWithDiscountsMet,
  (selectedChoicesWithDiscountsMet) => {
    return Number(
      selectedChoicesWithDiscountsMet.reduce((accumulator, selectedChoice) => {
        return accumulator - (selectedChoice?.discount?.cost ?? 0);
      }, 0)
    );
  }
);

export const getSelectedChoicesTotalCost = createSelector(
  getSelectedChoices,
  getDiscountsTotal,
  (selectedChoices, discount) => {
    return Number(
      selectedChoices.reduce((accumulator, choice) => {
        if (choice?.title !== "Skill*") {
          return accumulator + (choice?.cost ?? 1) * (choice?.selected || 1);
        }
        return (
          accumulator + (choice?.["2"] ?? 0) * 2 + (choice?.["4"] ?? 0) * 4
        );
      }, discount)
    );
  }
);

export const getSelectedChoicesClipboardText = createSelector(
  getSelectedChoices,
  (selectedChoices) => {
    return selectedChoices
      .map((choice) => {
        if (choice?.title === "Skill*") {
          return `${choice?.title} - Purchased ${choice?.selected} ${pluralize(
            "time",
            choice?.selected
          )} (${choice?.[2] ?? 0} ${pluralize(
            "Profession",
            choice?.[2]
          )} to be Skilled in | ${choice?.[4] ?? 0} ${pluralize(
            "Profession",
            choice?.[4]
          )} to be Taught)`;
        } else if (choice?.multi) {
          return `${choice?.title} - Purchased ${choice?.selected} ${pluralize(
            "time",
            choice?.selected
          )}`;
        } else if (choice?.upgradable) {
          return `${choice?.title} - ${
            choice?.upgraded ? choice?.buttonText[1] : choice?.buttonText[0]
          }`;
        }
        return choice?.title;
      })
      .join("\n");
  }
);

export const getDialogOpen = createSelector(getState, (state) => {
  return !!state.dialogOpen;
});
