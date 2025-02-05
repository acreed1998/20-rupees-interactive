import { DialogContent, DialogTitle, Dialog as MUIDialog } from "@mui/material";
import { useSelector } from "react-redux";
import { getDialogOpen } from "../../redux/selectors";

export const Dialog = () => {
  const dialogOpen = useSelector(getDialogOpen);

  return (
    <MUIDialog aria-labelledby="20-rupees-dialog-title" open={dialogOpen}>
      <DialogTitle id="20-rupees-dialog-title">Final Build</DialogTitle>
      <DialogContent></DialogContent>
    </MUIDialog>
  );
};
