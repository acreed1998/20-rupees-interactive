import { useSelector } from "react-redux";
import { getSelectedChoices } from "../../redux/selectors";
import { Grid2 } from "@mui/material";

export const ResultsList = () => {
  const results = useSelector(getSelectedChoices);

  return (
    <Grid2 container>
      {results.map((result, index) => {
        return (
          <Grid2 key={result?.title} size={{ xs: 12, md: 4 }}>
            {index}
          </Grid2>
        );
      })}
    </Grid2>
  );
};
