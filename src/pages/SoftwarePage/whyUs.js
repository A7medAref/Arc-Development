import { useStyle } from "./SoftwareStyle";
import {IoIosBulb,IoIosStopwatch,IoIosCash}from "react-icons/io";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
const sentences= ["whether we're replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology",
"Using regular commercial software leaves you with a lot of stuff you don't need without some of the stuff you do need, and ultimately controls the way you work without using any software at all you risk falling begind competitors and missing out on huge savings from increased efficiency",
"Our custom solutions are designed from the ground up with your needs, wants and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options",
"We create exactly what you want, exactly how you want it"]
export default function WhyUs()
{
    const classes = useStyle();
    const Theme = useTheme();
    const match = useMediaQuery(Theme.breakpoints.down("sm"));
    return <Grid container direction="column" style={{margin:match ? "auto" : "0"}} alignItems={match ? "center" : "flex-start"}>
        <Grid item className={[classes.headerResp,classes.marginLeft]}><Typography variant="h3">Custom Software Development</Typography></Grid>
        <Grid container className={[classes.whyContainer,classes.marginLeft]} justifyContent={match ? "center" : "flex-start"}>
            <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[0]}</Typography></Grid>
            <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[1]}</Typography></Grid>
            <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[2]}</Typography></Grid>
            <Grid item><Typography variant="subtitle2" className={classes.whyDetails}>{sentences[3]}</Typography></Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" style={{maxWidth:"100%"}}>
            <Grid container direction="column" alignItems="center" className={[classes.fitContent,classes.whyIconsContainer]}>
                <Typography variant="h5" style={{fontSize:match?"1em":"1.3em"}}>Save Energy</Typography><IoIosBulb className={classes.whyIcons}/>
            </Grid>
            <Grid container direction="column" alignItems="center" className={[classes.fitContent,classes.whyIconsContainer]}>
                <Typography variant="h5" style={{fontSize:match?"1em":"1.3em"}}>Save Time</Typography><IoIosStopwatch className={classes.whyIcons}/>
            </Grid>
            <Grid container direction="column" alignItems="center" className={[classes.fitContent,classes.whyIconsContainer]}>
                <Typography variant="h5" style={{fontSize:match?"1em":"1.3em"}}>Save Money</Typography><IoIosCash className={classes.whyIcons}/>
            </Grid>
        </Grid>
    </Grid>
}