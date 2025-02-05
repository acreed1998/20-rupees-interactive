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
  const fiDisabled = item?.title === "Guide" && !masterSwordPicked;

  return (
    choiceWithMultipleCosts &&
    !multi && (
      <Grid2 size={12}>
        <Grid2 container justifyContent="space-around">
          <Grid2 size={{ xs: 4 }}>
            <Button
              onClick={onMultiCostOptionClick(item?.cost[0])}
              className="normal-case h-full"
              fullWidth
              variant={isSelectedMultiOption[0] ? "outlined" : "contained"}
              disabled={fiDisabled}
            >
              {item?.buttonText?.[0]}
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 4 }}>
            <Button
              onClick={onMultiCostOptionClick(item?.cost[1])}
              className="normal-case h-full"
              fullWidth
              variant={isSelectedMultiOption[1] ? "outlined" : "contained"}
            >
              {item?.buttonText?.[1]}
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    )
  );
};
