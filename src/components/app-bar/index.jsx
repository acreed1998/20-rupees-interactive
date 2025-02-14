import {
  Grid2,
  IconButton,
  AppBar as MUIAppBar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRupees, getSelectedChoicesTotalCost } from "../../redux/selectors";
import ViewList from "@mui/icons-material/ViewList";
import { toggleDialogOpen } from "../../redux/slices/mainSlice";

export const AppBar = () => {
  const dispatch = useDispatch();
  const initRupees = useSelector(getRupees);
  const totalCost = useSelector(getSelectedChoicesTotalCost);

  const onIconButtonClick = () => dispatch(toggleDialogOpen());

  return (
    <MUIAppBar className="top-auto bottom-0 bg-green-600" position="fixed">
      <Grid2 container justifyContent="space-around">
        <IconButton
          aria-label="Open modal showing purchases made"
          onClick={onIconButtonClick}
        >
          <ViewList />
        </IconButton>
        <Typography
          className="my-4 font-bold text-lg text-black"
          variant="body1"
        >
          {initRupees - totalCost} Rupees
        </Typography>
      </Grid2>
    </MUIAppBar>
  );
};
