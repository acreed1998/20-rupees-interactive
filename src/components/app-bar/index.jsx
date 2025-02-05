import {
  Grid2,
  IconButton,
  AppBar as MUIAppBar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { getRupees, getSelectedChoicesTotalCost } from "../../redux/selectors";
import { ViewList } from "@mui/icons-material";

export const AppBar = () => {
  const initRupees = useSelector(getRupees);
  const totalCost = useSelector(getSelectedChoicesTotalCost);

  return (
    <MUIAppBar className="top-auto bottom-0" position="fixed">
      <Grid2 container justifyContent="space-around">
        <IconButton>
          <ViewList />
        </IconButton>
        <Typography className="my-4">
          {initRupees - totalCost} Rupees
        </Typography>
      </Grid2>
    </MUIAppBar>
  );
};
