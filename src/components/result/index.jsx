import { Card, Grid2, Typography } from "@mui/material";

/* eslint-disable react/prop-types */
export const Result = ({ item }) => {
  const { title, upgradable, upgraded, buttonText, multi, selected } = item;

  return (
    <Card className="h-full p-4 border border-solid border-black">
      <Grid2 className="h-full" container spacing={2} justifyContent="center">
        <Grid2 size={12}>
          <Grid2 container justifyContent="center">
            <img
              className="flex h-90 w-auto min-w-60"
              height={360}
              width={360}
              src={`/${item?.src}`}
              alt={`${title} image`}
              loading="lazy"
            />
          </Grid2>
        </Grid2>
        <Grid2 size={12}>
          <Typography textAlign="center" variant="h4">
            {title}
          </Typography>
        </Grid2>
        {upgradable && (
          <Grid2 size={12}>
            <Grid2 container justifyContent="center">
              <Card className="min-w-1/2 max-w-1/2 border border-solid border-black">
                <Typography textAlign="center">
                  {upgraded ? buttonText?.[1] : buttonText?.[0]}
                </Typography>
              </Card>
            </Grid2>
          </Grid2>
        )}
        {multi && (
          <Grid2 size={12}>
            <Grid2 container justifyContent="center">
              <Card className="min-w-1/2 max-w-1/2 border border-solid border-black">
                {title === "Skill*" ? (
                  <Typography textAlign="center">
                    {item[2]} {`Profession${item?.[2] ? "" : "s"}`} to be
                    Skilled in
                    <br />
                    {item?.[4]} {`Profession${item?.[4] === 1 ? "" : "s"}`} to
                    be Taught
                  </Typography>
                ) : (
                  <Typography textAlign="center">
                    {selected} {`Purchase${selected === 1 ? "" : "s"}`}
                  </Typography>
                )}
              </Card>
            </Grid2>
          </Grid2>
        )}
      </Grid2>
    </Card>
  );
};
