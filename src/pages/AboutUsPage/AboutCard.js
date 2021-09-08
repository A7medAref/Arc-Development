import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { useStyle } from "./AboutStyle";
import { useGlobalStyle } from "../../components/ui/Global";
const sentence =
  "Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.";
export default function AboutCard() {
  const global = useGlobalStyle();
  const classes = useStyle();
  const theme = useTheme();
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid content>
      <Grid container>
        <Typography
          variant="h3"
          style={{ margin: matchMd ? "0 auto 1rem" : "0 0 1rem 2rem" }}
          className={global.headerResp}
        >
          About Us
        </Typography>
      </Grid>
      <Grid
        content
        item
        justifyContent="center"
        lg={10}
        xs={11}
        style={{ textAlign: "center", margin: "auto" }}
      >
        <Typography variant="h5" className={classes.AboutCardText}>
          {sentence}
        </Typography>
      </Grid>
    </Grid>
  );
}
