import {
  Grid,
  Typography,
  useTheme,
  TextField,
  Button,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import { GoCheck } from "react-icons/go";
import { useStyle } from "../ContactPage/ContactStyle";
import { useState } from "react";
import { useGlobalStyle } from "../../components/ui/Global";
import { IoIosSend } from "react-icons/io";

function isVaule(word) {
  const vauleLetters = ["a", "e", "i", "o", "u"];
  let vaule = false;
  vauleLetters.forEach((e) => {
    if (e === word[0].toLowerCase()) vaule = true;
  });
  return vaule;
}

export default function EstimateDialog({ data }) {
  const [NameError, setNameError] = useState(false);
  const [MailError, setMailError] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const global = useGlobalStyle();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  const matchXS = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyle();
  const primary = theme.palette.primary.main;
  const [nameField, setNameField] = useState("");
  const [mailField, setMailField] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [messageField, setMessageField] = useState("");
  const selectedOptions = data
    .map((e) => {
      const Selected = e.options.filter((x) => x.selected);
      return Selected;
    })
    .filter((e) => e.length !== 0);

  let Order = [
    `You want ${selectedOptions[0][0].title} for ${selectedOptions[1].map(
      (e, i) => {
        function Lang() {
          if (isVaule(e.title)) return `an ${e.title}`;
          return `a ${e.title}`;
        }
        if (
          i === selectedOptions[1].length - 1 &&
          selectedOptions[1].length !== 1
        )
          return `and ${Lang()}`;
        else return Lang();
      }
    )}.`,
  ];
  if (selectedOptions.length > 2) {
    Order.push(
      `With ${selectedOptions.map((e, i) => {
        if (i > 1 && i < selectedOptions.length - 2)
          return e.map((x, xi) => {
            if (i === selectedOptions.length - 3 && xi === e.length - 1)
              return `and ${x.title}`;
            return `${x.title} `;
          });
        return null;
      })}.`
    );
    Order[1] = Order[1].replace(/,,/g, "");
    Order.push(
      `The custom feature will be of ${selectedOptions[
        selectedOptions.length - 2
      ][0].title.toLowerCase()}, and the project will be used by about ${
        selectedOptions[selectedOptions.length - 1][0].title
      } users.`
    );
  }
  let cost = 0;
  selectedOptions.forEach((element, i) => {
    element.forEach((e) => {
      if (i === 5) cost *= e.cost;
      else cost += e.cost;
    });
  });
  function placeRequest() {
    console.log(cost);
  }
  function validation(e) {
    switch (e.target.id) {
      case "name":
        setNameError(e.target.value.length === 0);
        break;
      case "mail":
        setMailError(
          !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
        );
        break;
      case "phone":
        setPhoneError(
          !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
            e.target.value
          )
        );
        break;
      default:
        break;
    }
  }
  const isDisabled =
    NameError ||
    PhoneError ||
    MailError ||
    messageField.length === 0 ||
    nameField.length === 0 ||
    mailField.length === 0 ||
    phoneField.length === 0;
  return (
    <Grid container>
      <Grid container justifyContent="center">
        <Typography variant="h3" className={global.headerResp}>
          Estimate
        </Typography>
      </Grid>
      <Grid
        container
        item
        md={12}
        lg={6}
        justifyContent={match ? "center" : undefined}
      >
        <Grid
          container
          direction="column"
          style={{ maxWidth: matchXS ? "17em" : "19rem" }}
          justifyContent="center"
        >
          <Grid container style={{ margin: "0 0 3rem" }}>
            <TextField
              onChange={(e) => {
                setNameField(e.target.value);
                validation(e);
              }}
              error={NameError}
              helperText={NameError ? "Please enter a Name" : ""}
              label="Name"
              id="name"
              fullWidth
              onFocus={() => setNameError(false)}
            ></TextField>
            <TextField
              onChange={(e) => {
                setMailField(e.target.value);
                validation(e);
              }}
              error={MailError}
              helperText={MailError ? "Please enter a correct mail" : ""}
              label="Email"
              id="mail"
              fullWidth
              onFocus={() => setMailError(false)}
              style={{ marginTop: "5px" }}
            ></TextField>
            <TextField
              onChange={(e) => {
                setPhoneField(e.target.value);
                validation(e);
              }}
              error={PhoneError}
              helperText={PhoneError ? "Please enter a valid number" : ""}
              label="Phone"
              id="phone"
              fullWidth
              onFocus={() => setPhoneError(false)}
              style={{ marginTop: "5px" }}
            ></TextField>
          </Grid>
          <Grid container>
            <TextField
              onChange={(e) => setMessageField(e.target.value)}
              style={{
                border: `2px solid ${primary}`,
                borderRadius: 5,
                padding: "2.5px 5px",
              }}
              multiline
              minRows="8"
              fullWidth
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid container style={{ margin: "2rem 0 1rem" }}>
            <Typography variant="subtitle1">
              We create this digital solution for an esimated
              <Typography
                variant="h5"
                color="secondary"
                style={{ display: "inline" }}
              >
                {" "}
                {cost}$
              </Typography>
            </Typography>
          </Grid>
          <Grid container>
            <Typography variant="subtitle1">
              Fill out your name, phone number, and email,place your request,
              and we'll get back to you with detalis moving forward and a final
              price
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item lg={6} direction="column">
        <Grid
          container
          style={{ margin: match ? undefined : "1.3rem 0 1rem 5rem" }}
          alignItems="center"
        >
          <Hidden mdDown>
            <Grid container direction="column" justifyContent="flex-start">
              {Order.map((e) => (
                <Grid item style={{ marginBottom: "1rem" }}>
                  <Typography variant="subtitle2">
                    <Grid container alignItems="center">
                      <Grid item lg={2}>
                        <Typography
                          variant="h4"
                          color="secondary"
                          style={{
                            display: "inline-block",
                            fontSize: "2.3rem",
                            marginRight: "1rem",
                          }}
                        >
                          <GoCheck />
                        </Typography>
                      </Grid>
                      <Grid item lg={10}>
                        <Typography
                          variant="subtitle2"
                          style={{ fontSize: ".9rem" }}
                        >
                          {e}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Hidden>
          <Grid container justifyContent={match ? "center" : undefined}>
            <Button
              disabled={isDisabled}
              variant="contained"
              color="secondary"
              style={{ padding: ".3rem 1.4rem", fontSize: "1.1rem" }}
              className={classes.estimateButton}
              onClick={placeRequest}
            >
              Place Request
              <IoIosSend style={{ marginLeft: ".5rem" }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
