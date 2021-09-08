import Header from "./components/Header";
import "./components/ui/normalize.css";
import {CircularProgress, ThemeProvider, Grid} from "@material-ui/core";
import { theme } from "./components/ui/theme";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import React,{ useState } from "react";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/notExist/NotExist";
// import ServicesPage from "./pages/Home/ServicesPage";
const Mobile = React.lazy(_=>import("./pages/mobile/mobile"));
const WebsitePage = React.lazy(_=>import("./pages/website/website"));
const Revolution = React.lazy(_=>import("./pages/RevolutionPage/Revolution"));
const About = React.lazy(_=>import("./pages/AboutUsPage/About"));
const ContactPage = React.lazy(_=>import("./pages/ContactPage/Contact"));
const EstimatePage =  React.lazy(_=>import("./pages/EstimatePage/Estimate"));
const SoftwarePage = React.lazy(_=>import("./pages/SoftwarePage/Software"));

const ServicesPage = React.lazy(_=>import('./pages/Home/ServicesPage'));
function App() {
  const [value,setValue] = useState(0);
  const [selected,setSelected] = useState(-1);
  const feedBack=<Grid container justifyContent="center" style={{height:"55vh",marginTop:"40vh"}}><CircularProgress color="primary" style={{width:"3rem",height:"3rem"}}/></Grid>
  return (
    <ThemeProvider theme={theme}>
      <Header value={value} setValue={setValue} setSelected={setSelected} selected={selected}></Header>
      <React.Suspense fallback={feedBack}>
        <Switch>
          <Route path="/" exact><Home value={value} setValue={setValue} setSelected={setSelected} selected={selected}/></Route>
          <Route path="/services" exact><ServicesPage value={value} setValue={setValue} setSelected={setSelected} selected={selected}/></Route>
          <Route path="/services/software"><SoftwarePage/></Route>
          <Route path="/services/mobile"><Mobile/></Route>
          <Route path="/services/website"><WebsitePage/></Route>
          <Route path="/revolution"><Revolution/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/contact"><ContactPage setValue={setValue}/></Route>
          <Route path="/estimate"><EstimatePage/></Route>
          <Route path="*"><PageNotFound setValue={setValue}/></Route>
        </Switch>
      </React.Suspense>
      <Footer value={value} setValue={setValue} setSelected={setSelected} selected={selected}/>
    </ThemeProvider>
  );
}

export default App;
