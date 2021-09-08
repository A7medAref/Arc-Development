import { Grid, Typography } from "@material-ui/core";
import { useStyle } from "./mobileStyle";
import swissKnife from "../../components/ui/assets/swissKnife.svg";
import extendAccess from "../../components/ui/assets/extendAccess.svg";
import increaseEngagement from "../../components/ui/assets/increaseEngagement.svg";
import { useGlobalStyle } from "../../components/ui/Global";
export default function LastBlock()
{
    const classes = useStyle();
    const global = useGlobalStyle();
    return <Grid container className={classes.marginVerticalMedium}>
        <Grid container lg={4} md={6} direction="column" justifyContent="flex-start" alignItems="center" className={classes.handleImgs}>
            <Typography gutterBottom variant="h4" className={global.headerMediumResp}>Extend Functionality</Typography>
            <Grid item><img className={classes.Img1} src={swissKnife} alt="knife"></img></Grid>
        </Grid>
        <Grid container lg={4} md={6} direction="column" justifyContent="flex-start" alignItems="center" className={classes.handleImgs}>
            <Typography style={{marginBottom:"2rem"}} variant="h4" className={global.headerMediumResp}>Extend Access</Typography>
            <Grid item ><img className={classes.Img2} src={extendAccess} alt="knife"></img></Grid>
        </Grid>
        <Grid container lg={4} md={12}  direction="column" justifyContent="flex-start" alignItems="center" className={[classes.handleImgs3,classes.handleImgs]}>
            <Typography variant="h4" className={global.headerMediumResp}>Extend Engagement</Typography>
            <Grid item><img className={classes.Img3} src={increaseEngagement} alt="knife"></img></Grid>
        </Grid>
    </Grid>
}