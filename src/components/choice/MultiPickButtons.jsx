/* eslint-disable react/prop-types */

import { Add, Remove } from "@mui/icons-material";
import { Grid2, IconButton, Typography } from "@mui/material";

export const MultiPickButtons = ({
  title,
  multi,
  onMultiPickOptionAddClick,
  onMultiPickOptionRemoveClick,
  picked,
  size = 12,
}) => {
  return (
    multi && (
      <Grid2 size={size}>
        <Typography gutterBottom className="font-bold">
          {title}
        </Typography>
        <Grid2 container justifyContent="space-around">
          <IconButton
            className="border-black border-solid border-2 text-black"
            onClick={onMultiPickOptionAddClick}
          >
            <Add />
          </IconButton>
          <Typography className="self-center font-bold" variant="body1">
            {picked ?? 0}
          </Typography>
          <IconButton
            className="border-black border-solid border-2 text-black"
            onClick={onMultiPickOptionRemoveClick}
          >
            <Remove />
          </IconButton>
        </Grid2>
      </Grid2>
    )
  );
};
