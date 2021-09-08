import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { useStyle } from "./AboutStyle";
import { useGlobalStyle } from "../../components/ui/Global";
import Book from "../../components/ui/assets/history.svg";
const sentences = [
  "Founded in 2019, we’re ready to get our hands on the world’s business problems.",
  "It all started with one question: Why aren’t all businesses using available technology? There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.",
  "We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.",
  "All this change can be a lot to keep up with, and that’s where we come in",
  " I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.",
  " Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.",
];
export default function HistoryBlock() {
  const theme = useTheme();
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchSm = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyle();
  const global = useGlobalStyle();
  return (
    <Grid
      container
      justifyContent={matchMd ? "center" : "space-between"}
      style={{ margin: matchMd ? "3rem 0 6rem" : "2rem 0" }}
    >
      <Grid
        container
        item
        direction="column"
        alignItems={matchMd ? "center" : undefined}
        lg={5}
        md={9}
        sm={10}
        xs={11}
        style={{ paddingLeft: matchMd ? undefined : "8.2rem" }}
      >
        <Grid item>
          <Typography
            variant="h4"
            gutterBottom
            className={global.headerMediumResp}
          >
            History
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: "1rem" }}>
          <span className={[classes.specialText]}>
            We are the new kid on the block
          </span>
        </Grid>
        <Grid item style={{ textAlign: matchMd ? "center" : undefined }}>
          <Typography
            variant="subtitle2"
            style={{
              fontSize: matchSm ? undefined : "1rem",
              marginBottom: "1rem",
            }}
            className={global.sub1Resp}
          >
            {sentences[0]}
          </Typography>
        </Grid>
        <Grid item style={{ textAlign: matchMd ? "center" : undefined }}>
          <Typography
            variant="subtitle2"
            style={{
              fontSize: matchSm ? undefined : "1rem",
              marginBottom: "1rem",
            }}
            className={global.sub1Resp}
          >
            {sentences[1]}
          </Typography>
        </Grid>
        <Grid item style={{ textAlign: matchMd ? "center" : undefined }}>
          <Typography
            variant="subtitle2"
            style={{
              fontSize: matchSm ? undefined : "1rem",
              marginBottom: "1rem",
            }}
            className={global.sub1Resp}
          >
            {sentences[2]}
          </Typography>
        </Grid>
        <Grid item style={{ textAlign: matchMd ? "center" : undefined }}>
          <Typography
            variant="subtitle2"
            style={{
              fontSize: matchSm ? undefined : "1rem",
              marginBottom: "1rem",
            }}
            className={global.sub1Resp}
          >
            {sentences[3]}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item lg={6} justifyContent="center">
        <Grid item>
          <img src={Book} className={classes.ImgBook} alt="history" />
        </Grid>
      </Grid>
    </Grid>
  );
}
