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
      className="min-w-9/10"
      open={dialogOpen}
      onClose={onClose}
      slotProps={{ paper: { className: "bg-[cornsilk] min-w-3/4" } }}
      fullScreen={isSVP}
      maxWidth={false}
    >
      <DialogContent dialogOpen={dialogOpen} onClose={onClose} />
    </MUIDialog>
  );
};
