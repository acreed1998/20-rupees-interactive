/* eslint-disable react/prop-types */
import Close from "@mui/icons-material/Close";
import {
  DialogTitle,
  Grid2,
  IconButton,
  DialogContent as MUIDialogContent,
} from "@mui/material";
import { ResultsList } from "../results-list";
import { useEffect, useRef } from "react";

export const DialogContent = ({ onClose, dialogOpen }) => {
  const buttonRef = useRef();
  const closeButtonId = "20-rupees-dialog-close-button";

  useEffect(() => {
    if (dialogOpen && buttonRef?.current) {
      buttonRef?.current?.focus();
    }
  }, [dialogOpen]);

  return (
    <>
      <Grid2 className="bg-red-500" container justifyContent="space-between">
        <DialogTitle id="20-rupees-dialog-title">Final Build</DialogTitle>
        <IconButton
          ref={buttonRef}
          id={closeButtonId}
          className="mr-4"
          onClick={onClose}
        >
          <Close />
        </IconButton>
      </Grid2>
      <MUIDialogContent>
        <ResultsList />
      </MUIDialogContent>
    </>
  );
};
