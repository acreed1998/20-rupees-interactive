import { Grid2, Link, Typography } from "@mui/material";
import { CYOA_DATA } from "../../data";
import { NorthEast } from "@mui/icons-material";

export const Opening = () => {
  return (
    <>
      <Grid2 className="mb-8" container justifyContent="center">
        <img
          src="./red_rupee.png"
          alt="Legend of Zelda Red Rupee (Worth 20 Rupees)"
        />
      </Grid2>
      <Typography id="cyoa_title" gutterBottom variant="h1">
        20 Rupees
      </Typography>
      <Typography className="mb-8" variant="caption" component="p">
        Original{" "}
        <Link
          className="opening-links"
          aria-label="Link to original CYOA, click to open in new tab"
          target="_blank"
          rel="noopener noreferrer"
          href="https://imgchest.com/p/wl7lmew96yx"
        >
          CYOA
          <NorthEast className="text-sm" />
        </Link>{" "}
        by{" "}
        <Link
          className="opening-links"
          aria-label="Link to original CYOA creator OSA's Reddit profile, click to open in new tab"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.reddit.com/user/ObscureSA/submitted/"
        >
          {CYOA_DATA.CYOA_author}
          <NorthEast className="text-sm" />
        </Link>
      </Typography>
      <Typography className="mb-8" variant="body1">
        {CYOA_DATA.opening}
      </Typography>
    </>
  );
};
