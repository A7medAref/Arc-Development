import { Grid ,Typography, useMediaQuery, useTheme} from "@material-ui/core";
import { useStyle } from "./SoftwareStyle";
import Lottie from "react-lottie";
import animationData from "../../components/ui/animations/documentsAnimation/data";
import {FcPieChart} from "react-icons/fc";
const sentences = ["Reduce Errors. Reduce Waste. Reduce Costs",
"Billions are spent annually on the purchasing, printing and distribution of paper. On top of the massive enviromental impact this has, it causes harm to your bottom line as well.",
"By utilizing digital forms and documents you can remove these obsolete expenses, accelerate you communication and help the Earth.",
"Whether you're a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability"]
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
};
export default function DataAnalysis()
{
    const classes = useStyle();
    const Theme = useTheme();
    const match = useMediaQuery(Theme.breakpoints.down("md"));
    return <Grid container direction={match ? "column" : "row"} alignItems="center" justifyContent={match ? "center" :"space-between"} style={{margin: !match ? "5rem 0 1rem" : "0"}}>
        <Grid container direction="column" style={{textAlign:match?"center" : "start",margin:match ? "5em 0" : "0 0 0 3em"}}  className={match ? classes.fitContent : [classes.fitContent,classes.marginLeft]}>
            <Grid item className={[classes.headerResp]}><Typography variant="h3">Digital Document &amp; Data</Typography></Grid>
                <Grid container direction={match ? "column" : "row"} style={{margin:match?"auto" : "0"}} alignContent="center" alignItems="center" className={classes.fitContent}>
                    <Grid item  style={{maxWidth:"300px"}} >
                        <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[0]}</Typography></Grid>
                        <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[1]}</Typography></Grid>
                        <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[2]}</Typography></Grid>
                    </Grid>
                    <Grid item className={classes.Documentation}>
                        <Lottie options={defaultOptions} maxWidth="250px"/>
                    </Grid>
                </Grid>
        </Grid>
        <Grid container direction="column" style={{margin:match?"auto" : "0 3em 0 0"}} alignItems={match ? "center" : "flex-end"} className={[classes.fitContent,classes.marginRight]}>
            <Grid item className={[classes.headerResp]}><Typography variant="h3">Scale</Typography></Grid>
                <Grid container direction={match ? "column-reverse" : "row"} className={classes.fitContent}>
                    <Grid item className={classes.pie} >
                        <FcPieChart />
                    </Grid>
                    <Grid item  style={{maxWidth:"300px",textAlign:match ? "center" :"right"}}>
                        <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[3]}</Typography></Grid>
                    </Grid>
                </Grid>
        </Grid>
    </Grid>
    
}