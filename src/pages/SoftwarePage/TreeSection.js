import { Grid, Typography } from "@material-ui/core"
import rootImg from "../../components/ui/assets/root.svg";
import { useStyle } from "./SoftwareStyle";
export default function Tree()
{
    const classes = useStyle();
    return <Grid container direction="column" alignItems="center">
        <Grid className={classes.tree}>
            <Grid item className={classes.treeImg}>
                <img src={rootImg} alt="Tree"/>
            </Grid>
            <Grid item>
                <Typography variant="h5">Root-Cause Analysis</Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2" className={classes.rootText}>Many Problems are merely symptoms of larger, underlying issues</Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2" className={classes.rootText}>We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology</Typography>
            </Grid>
        </Grid>
    </Grid>
}