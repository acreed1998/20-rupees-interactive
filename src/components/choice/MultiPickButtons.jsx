/* eslint-disable react/prop-types */

import { Add, Remove } from "@mui/icons-material";
import { Grid2, IconButton, Typography } from "@mui/material";

export const MultiPickButtons = ({
  title,
  multi,
  onMultiPickOptionAddClick,
  onMultiPickOptionRemoveClick,
  picked,
}) => {
  return (
    multi && (
      <Grid2 size={12}>
        <Typography>{title}</Typography>
        <Grid2 container justifyContent="space-around">
          <IconButton onClick={onMultiPickOptionAddClick}>
            <Add />
          </IconButton>
          <Typography className="self-center" variant="body1">
            {picked ?? 0}
          </Typography>
          <IconButton onClick={onMultiPickOptionRemoveClick}>
            <Remove />
          </IconButton>
        </Grid2>
      </Grid2>
    )
  );
};
