import { Dialog as MUIDialog, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDialogOpen } from "../../redux/selectors";
import { toggleDialogOpen } from "../../redux/slices/mainSlice";
import { DialogContent } from "./DialogContent";

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
      <DialogContent dialogOpen={dialogOpen} onClose={onClose} />
    </MUIDialog>
  );
};
