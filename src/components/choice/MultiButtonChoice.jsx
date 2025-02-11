/* eslint-disable react/prop-types */

import { Button, Grid2 } from "@mui/material";

export const MultiButtonChoice = ({
  choiceWithMultipleCosts,
  multi,
  isSelectedMultiOption,
  onMultiCostOptionClick,
  item,
  masterSwordPicked,
}) => {
  const title = item?.title;
  const fiDisabled = title === "Guide" && !masterSwordPicked;

  const firstOption = item?.buttonText?.[0];
  const secondOption = item?.buttonText?.[1];

  return (
    choiceWithMultipleCosts &&
    !multi && (
      <Grid2 size={12}>
        <Grid2 container justifyContent="space-around">
          <Grid2 size={{ xs: 4 }}>
            <Button
              aria-label={`Purchase ${firstOption} for ${title}`}
              onClick={onMultiCostOptionClick(item?.cost[0])}
              className={`normal-case h-full ${
                fiDisabled ? "" : "text-black border-black"
              } ${isSelectedMultiOption[0] ? "bg-green-600" : ""}`}
              fullWidth
              variant="outlined"
              disabled={fiDisabled}
            >
              {item?.buttonText?.[0]}
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 4 }}>
            <Button
              aria-label={`Purchase ${secondOption} for ${title}`}
              onClick={onMultiCostOptionClick(item?.cost[1], true)}
              className={`normal-case h-full text-black border-black ${
                isSelectedMultiOption[1] ? "bg-green-600" : ""
              }`}
              fullWidth
              variant="outlined"
            >
              {item?.buttonText?.[1]}
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    )
  );
};
