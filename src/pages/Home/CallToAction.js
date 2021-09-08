import { useStyle } from "./HomeStyle";
import { Grid,Typography ,Button, useMediaQuery, useTheme} from "@material-ui/core";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function CallToAction(prop)
{
    const classes = useStyle();
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down("sm"));
    return <Grid container className={classes.CallBackground} alignItems="center" justifyContent={match ? "center" :"space-between"}
    direction={match ? "column" : "row"} style={prop.styling}>
        <Grid container className={match ? classes.fitContent : [classes.fitContent,classes.marginLeft]} direction="column">
            <Typography className={classes.lastRow} color="primary">Simple Software.<br/>Revolutionary Results.</Typography>
            <Typography variant="subtitle2" style={{color:"white",fontSize:match?".9em":"1.1em"}}>Take advantage of the 21st century</Typography>
            <Grid item><Button className={classes.LearnMore} style={{fontSize:match?".7em":".9em"}} color="primary"
            component={Link} to="/revolution" onClick={_=>{prop.setValue(2)}}>Learn more <AiOutlineRight/></Button></Grid>
        </Grid>
        <Grid item>
            <Button variant="contained" color="secondary" className={classes.estimateButton} style={{margin:match ? "1rem 0 0" :"10rem"}}
            component={Link} to="/estimate" onClick={_=>{prop.setValue(5)}}>Free Estimate</Button>
        </Grid>
    </Grid>
}