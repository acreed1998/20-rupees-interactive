/* eslint-disable react/prop-types */
import Close from "@mui/icons-material/Close";
import {
  DialogTitle,
  Grid2,
  IconButton,
  DialogContent as MUIDialogContent,
} from "@mui/material";
import { ResultsList } from "../results-list";
import { useEffect } from "react";

export const DialogContent = ({ onClose, dialogOpen }) => {
  const closeButtonId = "20-rupees-dialog-close-button";

  useEffect(() => {
    if (dialogOpen) {
      document.getElementById(`${closeButtonId}`)?.focus();
    }
  }, [dialogOpen]);

  return (
    <>
      <Grid2 className="bg-red-500" container justifyContent="space-between">
        <DialogTitle id="20-rupees-dialog-title">Final Build</DialogTitle>
        <IconButton id={closeButtonId} className="mr-4" onClick={onClose}>
          <Close />
        </IconButton>
      </Grid2>
      <MUIDialogContent>
        <ResultsList />
      </MUIDialogContent>
    </>
  );
};
