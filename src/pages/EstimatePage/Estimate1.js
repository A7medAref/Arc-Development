import {
  Button,
  useMediaQuery,
  useTheme,
  Grid,
  IconButton,
  Typography,
  Dialog,
} from "@material-ui/core";
import { useStyle } from "./EstimateStyle";
import { softwareQuestions, websiteQuestions } from "./EstimateData";
import { useGlobalStyle } from "../../components/ui/Global";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../components/ui/animations/estimateAnimation/data.json";
import EstimateDialog from "./EstimateDialog";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Estimate1() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(softwareQuestions);
  const global = useGlobalStyle();
  const classes = useStyle();
  const Theme = useTheme();
  const matchsm = useMediaQuery(Theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  function HandleMainData(id) {
    function DeSelect(questions) {
      questions[index].options.forEach((element) => {
        element.selected = false;
      });
      questions[index].options[id - 1].selected = true;
    }
    if (index === 0 && id === 3) {
      const questions = websiteQuestions;
      DeSelect(questions);
      setData([...questions]);
      setIndex(index + 1);
    } else if (index === 0) {
      const questions = softwareQuestions;
      DeSelect(questions);
      setData([...questions]);
      setIndex(index + 1);
    } else {
      const questions = data;
      if (questions[index].subtitle === "Select all that apply.") {
        questions[index].options[id - 1].selected =
          !questions[index].options[id - 1].selected;
        setData([...questions]);
      } else {
        if (questions[index].options[id - 1].selected)
          questions[index].options[id - 1].selected = false;
        else {
          DeSelect(questions);
        }
        setData([...questions]);
      }
    }
  }
  function isAllSelected() {
    let x = false;
    data.forEach((e, i) => {
      if (i !== 0) {
        const arr = e.options.filter((e) => e.selected);
        if (arr.length === 0) x = true;
      }
    });
    if (x) return false;
    return true;
  }
  function nextIndex() {
    setIndex(index + 1);
  }
  function previousIndex() {
    setIndex(index - 1);
  }
  function disableNext() {
    if (index === data.length - 1) return true;
    return false;
  }
  function disablePrevious() {
    if (index === 0) return true;
    return false;
  }
  return (
    <>
      {" "}
      <Grid container style={{ marginBottom: "4rem", minHeight: "70vh" }}>
        <Grid container>
          <Typography
            variant="h3"
            className={[global.headerResp, classes.centerUnderMd]}
          >
            Estimate
          </Typography>
        </Grid>
        <Grid container>
          <Grid container item lg={5} justifyContent="flex-start">
            <Grid item md={6} lg={9} sm={8} xs={10} className={classes.center}>
              <Lottie options={defaultOptions} style={{ maxWidth: "35rem" }} />
            </Grid>
          </Grid>
          <Grid
            container
            item
            lg={7}
            md={12}
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.paddingRight}
          >
            <Grid
              container
              direction="column"
              style={{ marginBottom: "3rem", textAlign: "center" }}
            >
              <Typography
                variant="h3"
                style={{ maxWidth: "95vw", margin: "auto" }}
                className={global.headerMediumResp}
              >
                {data[index].title}
              </Typography>
              <Typography variant="subtitle1">
                {data[index].subtitle}
              </Typography>
            </Grid>
            <Grid
              container
              className={[classes.center, classes.CardsContainer]}
              justifyContent="space-between"
            >
              <Grid container item md={4} sm={6} justifyContent="center">
                <Button
                  variant={
                    data[index].options[0].selected && index !== 0
                      ? "contained"
                      : undefined
                  }
                  className={classes.ButtonCard}
                  color={
                    data[index].options[0].selected ? "secondary" : undefined
                  }
                  onClick={(_) => HandleMainData(data[index].options[0].id)}
                >
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ textAlign: "center" }}
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        className={global.body2}
                        gutterBottom
                      >
                        {data[index].options[0].title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        style={{
                          width: matchsm ? "7rem" : "10rem",
                          height: matchsm ? "7rem" : "10rem",
                        }}
                        alt={data[index].options[0].iconAlt}
                        src={data[index].options[0].icon}
                      ></img>
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
              <Grid container item md={4} sm={6} justifyContent="center">
                <Button
                  variant={
                    data[index].options[1].selected && index !== 0
                      ? "contained"
                      : undefined
                  }
                  className={classes.ButtonCard}
                  color={
                    data[index].options[1].selected ? "secondary" : undefined
                  }
                  onClick={(_) => HandleMainData(data[index].options[1].id)}
                >
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ textAlign: "center" }}
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        className={global.body2}
                        gutterBottom
                      >
                        {data[index].options[1].title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        style={{
                          width: matchsm ? "7rem" : "10rem",
                          height: matchsm ? "7rem" : "10rem",
                        }}
                        alt={data[index].options[1].iconAlt}
                        src={data[index].options[1].icon}
                      ></img>
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
              <Grid
                container
                item
                md={4}
                sm={6}
                justifyContent="center"
                style={{ margin: matchsm ? "auto" : undefined }}
              >
                <Button
                  variant={
                    data[index].options[2].selected && index !== 0
                      ? "contained"
                      : undefined
                  }
                  className={classes.ButtonCard}
                  color={
                    data[index].options[2].selected ? "secondary" : undefined
                  }
                  onClick={(_) => HandleMainData(data[index].options[2].id)}
                >
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ textAlign: "center" }}
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        className={global.body2}
                        gutterBottom
                      >
                        {data[index].options[2].title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        style={{
                          width: matchsm ? "7rem" : "10rem",
                          height: matchsm ? "7rem" : "10rem",
                        }}
                        alt={data[index].options[2].iconAlt}
                        src={data[index].options[2].icon}
                      ></img>
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid
                container
                item
                xs={10}
                sm={5}
                md={4}
                justifyContent="space-between"
              >
                <Grid item>
                  <IconButton
                    color="primary"
                    disabled={disablePrevious()}
                    style={{ padding: ".5rem" }}
                    onClick={previousIndex}
                  >
                    <AiOutlineArrowLeft />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    color="primary"
                    disabled={disableNext()}
                    style={{ padding: ".5rem" }}
                    onClick={nextIndex}
                  >
                    <AiOutlineArrowRight />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.estimateButton}
                  onClick={() => {
                    if (isAllSelected()) setOpen(true);
                  }}
                >
                  Estimate
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        classes={{ paper: classes.dialogPaper }}
      >
        <EstimateDialog data={data} />
      </Dialog>
    </>
  );
}
