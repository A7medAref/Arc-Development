import {
  Grid,
  Typography,
  useTheme,
  TextField,
  Button,
  useMediaQuery,
  Dialog,
} from "@material-ui/core";
import CallToAction from "../Home/CallToAction";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend, IoMdMail } from "react-icons/io";
import { useStyle } from "./ContactStyle";
import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
const mail = "ahmedmostafa992001@gmail.com";
export default function ContactPage({ setValue }) {
  const [open, setOpen] = useState(false);
  const [NameError, setNameError] = useState(false);
  const [MailError, setMailError] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  const matchXS = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyle();
  const primary = theme.palette.primary.main;
  const [nameField, setNameField] = useState("");
  const [mailField, setMailField] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [messageField, setMessageField] = useState("");
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
    <Grid container style={{ marginTop: "-1rem" }}>
      <Grid container item xl={3} lg={4} justifyContent="center">
        <Grid
          container
          direction="column"
          style={{
            maxWidth: matchXS ? "17em" : "19rem",
            padding: "3rem 0 2rem",
          }}
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="h3">Contact Us</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" className={classes.LightPrimary}>
              We're waiting
            </Typography>
          </Grid>
          <Grid container style={{ margin: "2rem 0" }}>
            <Grid item container style={{ color: primary }}>
              <IoMdMail style={{ marginRight: ".5rem" }} />
              <Typography
                gutterBottom
                variant="subtitle2"
                className={classes.LightPrimary}
              >
                <a href="tel: 01155210037" className={classes.disableLinkStyle}>
                  01155210037
                </a>
              </Typography>
            </Grid>
            <Grid item container style={{ color: theme.palette.primary.main }}>
              <FaPhoneAlt style={{ marginRight: ".5rem" }} />
              <Typography
                variant="subtitle2"
                className={classes.LightPrimary}
                style={{ fontSize: match ? ".95em" : undefined }}
              >
                <a
                  href={`mailto: ${mail}`}
                  className={classes.disableLinkStyle}
                >
                  {mail}
                </a>
              </Typography>
            </Grid>
            <Grid container style={{ margin: "2rem 0 5rem" }}>
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
            <Grid container>
              <Button
                disabled={isDisabled}
                onClick={(_) => {
                  if (!isDisabled) setOpen(true);
                }}
                variant="contained"
                color="secondary"
                style={{ margin: "1rem auto", width: "80%" }}
                className={classes.estimateButton}
              >
                Send Message{" "}
                <IoIosSend
                  style={{ marginLeft: ".5rem", fontSize: "1.5rem" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xl={9} lg={8}>
        <CallToAction
          styling={{ height: match ? undefined : "100%" }}
          setValue={setValue}
        />
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        classes={{ paper: classes.dialogPaper }}
      >
        <Grid
          container
          direction="column"
          style={{ maxWidth: matchXS ? "17em" : "19rem" }}
          justifyContent="center"
        >
          <Grid item style={{ textAlign: "center" }}>
            <Typography variant="h3">Contact Us</Typography>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Typography variant="subtitle1" className={classes.LightPrimary}>
              We're waiting
            </Typography>
          </Grid>
          <Grid container style={{ margin: "2rem 0 1rem" }}>
            <Grid container style={{ margin: "0rem 0 5rem" }}>
              <TextField value={nameField} label="Name" fullWidth></TextField>
              <TextField
                value={mailField}
                label="Email"
                fullWidth
                style={{ marginTop: "5px" }}
              ></TextField>
              <TextField
                value={phoneField}
                label="Phone"
                fullWidth
                style={{ marginTop: "5px" }}
              ></TextField>
            </Grid>
            <Grid container>
              <TextField
                value={messageField}
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
            <Grid
              container
              direction={matchXS ? "column-reverse" : "row"}
              alignItems="center"
            >
              <Button
                color="primary"
                style={{ height: "fit-content" }}
                onClick={(_) => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ padding: matchXS ? ".3rem 1rem" : ".3em 3rem" }}
                className={classes.estimateButton}
              >
                Confirm{" "}
                <GiConfirmed
                  style={{ marginLeft: ".5rem", fontSize: "1.5rem" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </Grid>
  );
}
