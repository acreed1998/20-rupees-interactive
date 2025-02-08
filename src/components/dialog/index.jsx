import {
  DialogContent,
  DialogTitle,
  Grid2,
  IconButton,
  Dialog as MUIDialog,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDialogOpen } from "../../redux/selectors";
import { toggleDialogOpen } from "../../redux/slices/mainSlice";
import { Close } from "@mui/icons-material";
import { ResultsList } from "../results-list";

export const Dialog = () => {
  const dispatch = useDispatch();
  const dialogOpen = useSelector(getDialogOpen);
  const isSVP = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const onClose = () => dispatch(toggleDialogOpen());

  return (
    <MUIDialog
      aria-labelledby="20-rupees-dialog-title"
      open={dialogOpen}
      onClose={onClose}
      fullScreen={isSVP}
    >
      <Grid2 className="bg-red-500" container justifyContent="space-between">
        <DialogTitle id="20-rupees-dialog-title">Final Build</DialogTitle>
        <IconButton className="mr-4" onClick={onClose}>
          <Close />
        </IconButton>
      </Grid2>
      <DialogContent>
        <ResultsList />
      </DialogContent>
    </MUIDialog>
  );
};
