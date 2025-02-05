import { useSelector } from "react-redux";
import { getOpenSections } from "../../redux/selectors";
import { CYOA_DATA } from "../../data";
import { Grid2, Typography } from "@mui/material";
import { Choice } from "../choice";
import { Fragment } from "react";

export const ChoicesList = () => {
  const openSections = useSelector(getOpenSections);

  return (
    <>
      {openSections.map((sectionKey) => {
        return (
          <Fragment key={sectionKey}>
            <Typography gutterBottom variant="h3">
              {sectionKey}
            </Typography>
            <Grid2 className="mb-12" container spacing={1}>
              {CYOA_DATA.options[sectionKey].map((choice) => {
                return (
                  <Grid2 size={{ xs: 12, md: 4 }} key={choice?.title}>
                    <Choice item={choice} />
                  </Grid2>
                );
              })}
            </Grid2>
          </Fragment>
        );
      })}
    </>
  );
};
