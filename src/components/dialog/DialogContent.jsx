/* eslint-disable react/prop-types */
import Close from "@mui/icons-material/Close";
import {
  Button,
  DialogTitle,
  Grid2,
  IconButton,
  DialogContent as MUIDialogContent,
  Typography,
} from "@mui/material";
import { ResultsList } from "../results-list";
import { useEffect, useRef, useState } from "react";
import Save from "@mui/icons-material/Save";
import { toPng } from "dom-to-image";
import ContentCopy from "@mui/icons-material/ContentCopy";
import { useSelector } from "react-redux";
import { getSelectedChoicesClipboardText } from "../../redux/selectors";

export const DialogContent = ({ onClose, dialogOpen }) => {
  const buttonRef = useRef();
  const dialogContentRef = useRef();
  const [buildImageLink, setBuildImageLink] = useState(null);
  const selectedChoicesClipboardText = useSelector(
    getSelectedChoicesClipboardText
  );
  const closeButtonId = "20-rupees-dialog-close-button";

  const createImageLink = async () => {
    if (!dialogContentRef?.current) return;

    toPng(dialogContentRef.current).then((url) => {
      setBuildImageLink(url);
    });
  };

  useEffect(() => {
    if (dialogOpen && buttonRef?.current) {
      buttonRef?.current?.focus();
    }

    if (dialogOpen && dialogContentRef?.current) {
      createImageLink();
    }
  }, [dialogOpen]);

  const onCopyBuildButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(selectedChoicesClipboardText);
    } catch (err) {
      console.log(
        "Something went wrong while trying to copy text to clipboard: ",
        err
      );
    }
  };

  return (
    <>
      <Grid2 className="bg-green-600" container justifyContent="space-between">
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
      <MUIDialogContent className="px-0" tabIndex={-1}>
        <Grid2 className="mb-8" container justifyContent="center" spacing={4}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Grid2 container justifyContent="center">
              <Button
                className="border border-solid border-black text-black min-w-55"
                variant="outlined"
                href={buildImageLink}
                download="build.png"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<Save />}
              >
                Save Image of Build
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Grid2 container justifyContent="center">
              <Button
                className="border border-solid border-black text-black min-w-55"
                onClick={onCopyBuildButtonClick}
                variant="outlined"
                endIcon={<ContentCopy />}
              >
                Copy Build Text
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 ref={dialogContentRef} container spacing={2}>
          <Grid2 size={12}>
            <Typography variant="h2" textAlign="center">
              Purchases
            </Typography>
          </Grid2>
          <Grid2 className="px-8" size={12}>
            <ResultsList dialogContentRef={dialogContentRef} />
          </Grid2>
        </Grid2>
      </MUIDialogContent>
    </>
  );
};
