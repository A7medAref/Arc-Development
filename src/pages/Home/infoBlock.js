import { useStyle } from "./HomeStyle";
import { Button, Grid, Typography } from "@material-ui/core";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function InfoBlock({setValue})
{
    const classes= useStyle();
    return <section className={classes.InfoSection}>
        <Grid container xs className={classes.PositionInfo} justifyContent="space-between" alignContent="center">
            <Grid container className={classes.fitContent} direction="column">
                <Grid item className={classes.InfoItem}>
                    <Typography variant="h3" className={classes.InfoMainText}>About Us</Typography>
                    <Typography variant="subtitle2" className={classes.InfoText}>Let's get personal</Typography>
                    <Button className={[classes.LearnMore,classes.whiteButton]} component={Link}
                    to="/about" onClick={_=>{setValue(3)}}>Learn more <AiOutlineRight/></Button>
                </Grid>
            </Grid>
            <Grid container className={classes.fitContent} direction="column">
                <Grid item className={classes.InfoItem}>
                    <Typography variant="h3" className={classes.InfoMainText}>Contact Us</Typography>
                    <Typography variant="subtitle2" className={classes.InfoText}>Say Hello</Typography>
                    <Button className={[classes.LearnMore,classes.whiteButton]} component={Link}
                    to="/contact" onClick={_=>{setValue(4)}}>Learn more <AiOutlineRight/></Button>
                </Grid>
            </Grid>
        </Grid>
    </section>
}