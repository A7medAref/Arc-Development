import { Grid ,Typography, useMediaQuery, useTheme} from "@material-ui/core";
import { useStyle } from "./SoftwareStyle";
import Lottie from "react-lottie";
import animationData from "../../components/ui/animations/automationAnimation/data.json";
import animationData2 from "../../components/ui/animations/uxAnimation/data";
const sentences = ["Why waste time when you don't have to",
"We can help you identify processes with time or event based actions which can now easily be automated",
"Increasing efficiency, increases profits, Leaving you more time to focus on your business, not busywork",
"A good design that isn't usable, isn't a good design.",
"So why are so many pieces of software complicated, confusing, and fustrating",
"By prioritizing users and the real ways they interact with technology we're able to develop unique, personable experiences that solve problems rather than create new ones"]
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
};
const defaultOptions2 = {
    loop: true,
    autoplay: true, 
    animationData: animationData2,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
};
export default function LastSection()
{
    const classes = useStyle();
    const Theme = useTheme();
    const match = useMediaQuery(Theme.breakpoints.down("md"));
    return <Grid container direction={match ? "column" : "row"} alignItems="center" justifyContent={match ? "center" :"space-between"} style={{marginBottom: match ? "0" : "5rem"}}>
        <Grid container direction="column" style={{textAlign:match?"center" : "start",margin:match ? "5em 0" : "0 0 0 3em"}}  className={match ? classes.fitContent : [classes.fitContent,classes.marginLeft]}>
            <Grid item className={[classes.headerResp]}><Typography variant="h3">Automation</Typography></Grid>
                <Grid container direction={match ? "column" : "row"} style={{margin:match?"auto" : "0"}} alignContent="center" alignItems="center" className={classes.fitContent}>
                    <Grid item  style={{maxWidth:match?"70%":"200px"}} >
                        <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[0]}</Typography></Grid>
                        <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[1]}</Typography></Grid>
                        <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[2]}</Typography></Grid>
                    </Grid>
                    <Grid item className={classes.Documentation}>
                        <Lottie options={defaultOptions} maxWidth="250px"/>
                    </Grid>
                </Grid>
        </Grid>
        <Grid container direction="column" style={{margin:match?"0 auto 6rem" : "0 3em 0 0"}} alignItems={match ? "center" : "flex-end"} className={[classes.fitContent,classes.marginRight]}>
            <Grid item className={[classes.headerResp]} style = {{maxWidth:"95%"}}><Typography variant="h3">User Experience Design</Typography></Grid>
                <Grid container direction={match ? "column-reverse" : "row"} className={classes.fitContent}>
                    <Grid item className={classes.Documentation} style={{maxWidth:"10rem",margin:match ? "1rem auto": "0 1rem 0 0"}}>
                        <Lottie options={defaultOptions2}/>
                    </Grid>
                    <Grid item  style={{maxWidth:"300px",textAlign:match ? "center" :"right"}}>
                        <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[3]}</Typography></Grid>
                        <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[4]}</Typography></Grid>
                        <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[5]}</Typography></Grid>
                    </Grid>
                </Grid>
        </Grid>
        
    </Grid>
    
}