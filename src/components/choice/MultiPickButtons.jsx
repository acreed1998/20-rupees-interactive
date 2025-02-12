/* eslint-disable react/prop-types */

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { Grid2, IconButton, Typography } from "@mui/material";

export const MultiPickButtons = ({
  item,
  title,
  multi,
  onMultiPickOptionAddClick,
  onMultiPickOptionRemoveClick,
  picked,
  size = 12,
}) => {
  const { title: itemTitle } = item;

  return (
    multi && (
      <Grid2 size={size}>
        {title && (
          <Typography gutterBottom className="font-bold">
            {title}
          </Typography>
        )}
        <Grid2 container justifyContent="space-around">
          <IconButton
            aria-label={`Purchase ${title ?? itemTitle} once`}
            className="border-black border-solid border-2 text-black"
            onClick={onMultiPickOptionAddClick}
          >
            <Add />
          </IconButton>
          <Typography className="self-center font-bold" variant="body1">
            {picked ?? 0}
          </Typography>
          <IconButton
            aria-label={`Return ${title ?? itemTitle} once`}
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
