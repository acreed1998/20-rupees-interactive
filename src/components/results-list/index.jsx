import { useSelector } from "react-redux";
import { getSelectedChoices } from "../../redux/selectors";
import { Grid2 } from "@mui/material";
import { Result } from "../result";

export const ResultsList = () => {
  const results = useSelector(getSelectedChoices);

  return (
    <Grid2 container spacing={1} justifyContent="center">
      {results.map((result) => {
        return (
          <Grid2 key={result?.title} size={{ xs: 12, md: 4 }}>
            <Result item={result} />
          </Grid2>
        );
      })}
    </Grid2>
  );
};
