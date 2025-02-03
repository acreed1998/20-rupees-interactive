import { Button, Grid2, Typography } from "@mui/material";
import { CYOA_DATA } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { getOpenSections } from "../../redux/selectors";
import { setOpenSections } from "../../redux/slices/mainSlice";

export const Sections = () => {
  const dispatch = useDispatch();
  const openSections = useSelector(getOpenSections);

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

  return (
    <Grid2 container justifyContent="center">
      <Grid2 size={12}>
        <Typography gutterBottom variant="h2">
          Sections
        </Typography>
      </Grid2>
      {Object.keys(CYOA_DATA.options).map((sectionKey) => {
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
  );
};
