import { useStyle } from "./HomeStyle";
import { Card ,Grid,Button, Typography} from "@material-ui/core";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function RevolutionBlock({setValue})
{
    const classes= useStyle();
    return <Grid container alignContent="center" justifyContent="center" className={classes.revolutionBackground}>
        <Card className={classes.RevolutionSection}>
            <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="column" className={classes.RevolutionCard}>
                <Grid item><Typography className={classes.revolutionMainText} variant="h4" color="primary">The Revolution</Typography></Grid>
                <Grid item className={classes.revolutionText}>Visionary insights coupled with cutting-edge technology is a recipe for revolution</Grid>
                <Grid item><Button variant="outlined" color="primary" className={classes.LearnMore} component={Link}
                to="/revolution" onClick={_=>{setValue(2)}}>Learn more  <AiOutlineRight/></Button></Grid>
            </Grid>
    </Card>
    </Grid> 
}