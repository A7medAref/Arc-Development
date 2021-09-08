import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@material-ui/core";
import Me from "../../components/ui/assets/Me.jpg";
import { useGlobalStyle } from "../../components/ui/Global";
const sentences = [
  " I learnt basic coding from a university course, and ever since then my passion has solely been set on learning — learning about computers , learning mathematics, and learning physics, studying design, always just learning.",
  "One Persent Every Day Would Make A Defference",
];

export default function Work() {
  const Theme = useTheme();
  const matchMd = useMediaQuery(Theme.breakpoints.down("md"));
  const matchSm = useMediaQuery(Theme.breakpoints.down("xs"));
  const global = useGlobalStyle();
  return (
    <Grid container direction="column">
      <Grid container justifyContent="center">
        <Typography
          style={{ marginBottom: matchMd ? "1rem" : "2rem" }}
          variant="h5"
        >
          Team
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography
          style={{
            fontSize: matchSm ? ".8rem" : ".9rem",
            marginBottom: ".7rem",
          }}
          variant="subtitle2"
        >
          Designed By Zackary Reece
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography
          style={{
            fontSize: matchSm ? ".8rem" : ".9rem",
            marginBottom: "1rem",
          }}
          variant="subtitle2"
        >
          Coded By Ahmed Aref
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography
          style={{
            fontSize: matchSm ? ".8rem" : ".9rem",
            marginBottom: "1rem",
          }}
          variant="subtitle2"
        >
          I started coding when i was 18 years old
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Avatar src={Me} style={{ width: "10rem", height: "10rem" }}></Avatar>
      </Grid>
      <Grid container>
        <Grid container item lg={3}></Grid>
        <Grid
          container
          item
          lg={6}
          md={8}
          xs={11}
          style={{
            textAlign: "center",
            margin: matchMd ? "0 auto 3rem" : "0 0 3rem",
          }}
          justifyContent="center"
        >
          <Grid item>
            <Typography
              className={global.sub1Resp}
              style={{
                fontSize: matchSm ? undefined : ".9rem",
                margin: matchMd ? ".8rem 0" : ".8rem auto",
              }}
              variant="subtitle2"
            >
              {sentences[0]}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{
                fontSize: matchSm ? ".9rem" : "1rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                color: Theme.palette.secondary.dark,
              }}
              variant="subtitle2"
            >
              {sentences[1]}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item lg={3}></Grid>
      </Grid>
    </Grid>
  );
}
