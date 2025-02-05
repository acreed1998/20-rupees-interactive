/* eslint-disable react/prop-types */

import { Button, Grid2 } from "@mui/material";

export const MultiButtonChoice = ({
  choiceWithMultipleCosts,
  multi,
  isSelectedMultiOption,
  onMultiCostOptionClick,
  item,
}) => {
  return (
    choiceWithMultipleCosts &&
    !multi && (
      <Grid2 size={12}>
        <Grid2 container justifyContent="space-around">
          <Grid2 size={{ xs: 4 }}>
            <Button
              onClick={onMultiCostOptionClick(item?.cost[0])}
              className="normal-case"
              fullWidth
              variant={isSelectedMultiOption[0] ? "contained" : "outlined"}
            >
              {item?.buttonText?.[0]}
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 4 }}>
            <Button
              onClick={onMultiCostOptionClick(item?.cost[1])}
              className="normal-case"
              fullWidth
              variant={isSelectedMultiOption[1] ? "contained" : "outlined"}
            >
              {item?.buttonText?.[1]}
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    )
  );
};
