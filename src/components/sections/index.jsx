import { Button, Grid2, Typography } from "@mui/material";
import { CYOA_DATA } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { getOpenSections } from "../../redux/selectors";
import { setOpenSections } from "../../redux/slices/mainSlice";

const sectionKeys = Object.keys(CYOA_DATA.options);

export const Sections = () => {
  const dispatch = useDispatch();
  const openSections = useSelector(getOpenSections);
  const numberOfOpenSections = openSections.length;

  const onSectionButtonClick =
    (section = "") =>
    () => {
      const openSectionIndex = openSections.findIndex(
        (openSection) => openSection === section
      );

      const newOpenSections =
        openSectionIndex !== -1
          ? [...(openSections?.toSpliced(openSectionIndex, 1) ?? [])]
          : [...openSections, section];

      dispatch(setOpenSections(newOpenSections));
    };

  const toggleAllSections = () => {
    if (numberOfOpenSections) {
      dispatch(setOpenSections([]));
      return;
    }
    dispatch(setOpenSections([...sectionKeys]));
  };

  return (
    <>
      <Grid2 className="mb-8" container justifyContent="center">
        <Grid2 item size={12}>
          <Typography gutterBottom variant="h2">
            Sections
          </Typography>
        </Grid2>
        {sectionKeys.map((sectionKey) => {
          const isSectionOpen = openSections.includes(sectionKey);
          return (
            <Grid2 key={sectionKey} item size={{ xs: 6, md: 3 }}>
              <Button
                aria-label={`${
                  isSectionOpen ? "Close" : "Open"
                } ${sectionKey} Section`}
                fullWidth
                className="normal-case"
                variant={isSectionOpen ? "contained" : "outlined"}
                onClick={onSectionButtonClick(sectionKey)}
              >
                {sectionKey}
              </Button>
            </Grid2>
          );
        })}
      </Grid2>
      <Grid2 container>
        <Grid2 size={12}>
          <Button
            onClick={toggleAllSections}
            className="normal-case"
            variant="outlined"
            fullWidth
          >
            {!numberOfOpenSections ? "Open" : "Close"} All Sections
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};
