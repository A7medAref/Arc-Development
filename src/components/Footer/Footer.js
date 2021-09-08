import { useStyle } from "./FooterStyle"
import Img from "../ui/assets/Footer Adornment.svg"
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import {FaFacebookSquare,FaInstagram} from "react-icons/fa";
import {SiTwitter} from "react-icons/si";
export default function Footer({value,setValue,selected,setSelected})
{
    const classes = useStyle();
    return <footer className={classes.footer}>
        <img src={Img} alt="footer Img" className={classes.Img}></img>
        <span className={classes.signiture}>Coded By <span>Ahmed Aref</span></span>
        <Hidden mdDown>
            <Grid container spacing={2} justifyContent="center" className={classes.mainGrid}>
                <Grid item onClick={_=>{setValue(0)}} className={[classes.gridLink,classes.gridItem]} component={Link} to="/">
                    Home
                </Grid>
                <Grid item direction="column">
                    <Grid container direction="column" className={classes.gridItem}>
                        <Grid item onClick={_=>{setValue(1);setSelected(0)}} className={classes.gridLink} component={Link} to="/services">Services</Grid>
                        <Grid item onClick={_=>{setValue(1);setSelected(1)}} className={classes.gridLink} component={Link} to="/services/software">Custom Software Development</Grid>
                        <Grid item onClick={_=>{setValue(1);setSelected(2)}} className={classes.gridLink} component={Link} to="/services/mobile">Mobile App Development</Grid>
                        <Grid item onClick={_=>{setValue(1);setSelected(3)}} className={classes.gridLink} component={Link} to="/services/website">Website Development</Grid>
                    </Grid>
                </Grid>
                <Grid item direction="column">
                    <Grid container direction="column" className={classes.gridItem}>
                        <Grid item onClick={_=>{setValue(2)}} className={classes.gridLink} component={Link} to="/revolution">The Revolution</Grid>
                        <Grid item onClick={_=>{setValue(2)}} className={classes.gridLink} component={Link} to="/revolution">Vision</Grid>
                        <Grid item onClick={_=>{setValue(2)}} className={classes.gridLink} component={Link} to="/revolution">Technology</Grid>
                        <Grid item onClick={_=>{setValue(2)}} className={classes.gridLink} component={Link} to="/revolution">Process</Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" className={classes.gridItem}>
                        <Grid onClick={_=>{setValue(3)}} item className={classes.gridLink} component={Link} to="/about">About Us</Grid>
                        <Grid onClick={_=>{setValue(3)}} item className={classes.gridLink} component={Link} to="/about">History</Grid>
                        <Grid onClick={_=>{setValue(3)}} item className={classes.gridLink} component={Link} to="/about">Team</Grid>
                    </Grid>
                </Grid>
                <Grid onClick={_=>{setValue(4)}} className={[classes.gridLink,classes.gridItem]} component={Link} to="/contact" item>Contact Us</Grid>
            </Grid>
        </Hidden>
        <Grid className={classes.icon} container justifyContent="flex-end" spacing={2}>
            <Grid component="a" href="https://www.facebook.com/ahmad.mostafaaref.7" target="_blank" rel="noopener noreferrer" item><FaFacebookSquare/></Grid>
            <Grid component="a" href="https://www.instagram.com/ahmadmaref/" target="_blank" rel="noopener noreferrer" item><FaInstagram/></Grid>
            <Grid component="a" href="https://twitter.com/AhmedAr19181954" target="_blank" rel="noopener noreferrer" item><SiTwitter/></Grid>
        </Grid>
    </footer>
}