import { Button, Grid, Typography } from '@material-ui/core';
import Lottie from 'react-lottie';
import {AiOutlineRight} from "react-icons/ai";
import { useStyle } from './HomeStyle';
import animationData from "../../components/ui/animations/landinganimation/data";
import software from "../../components/ui/assets/software.svg";
import mobile from "../../components/ui/assets/mobile.svg";
import website from "../../components/ui/assets/website.svg";
import { Link, useHistory } from 'react-router-dom';
import RevolutionBlock from './revolutionBlock';
import InfoBlock from './infoBlock';
import CallToAction from './CallToAction';
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
};


export default function Home({value,setValue,selected,setSelected})
{
    const history = useHistory();
    const classes = useStyle();
    return <>
        <Grid container justifyContent="space-between">
            <Grid container direction="column" justifyContent="center" className={classes.row1col1}>
                <Typography className={classes.row1col1Text} color="primary">Bringing West Coast Technology<br/>to the Midwest</Typography>
                <Grid container justifyContent="center" className={classes.row1col1Buttons}>
                    <Button variant="contained" color="secondary" component={Link} to="/estimate"
                    onClick={_=>{setValue(5)}}>Free Estimate</Button>
                    <Button variant="outlined" color="primary" className={classes.LearnMore} component={Link}
                    to="/about" onClick={_=>{setValue(3)}}>Learn more  <AiOutlineRight/></Button>
                </Grid>
            </Grid>
            <Grid item className={classes.row1col1Animation}>
                <Lottie options={defaultOptions}/>
            </Grid>
        </Grid>
        <div className={classes.servicesContainer}>
            <Grid container justifyContent="flex-start" className={classes.GridBlock}>
                <Grid item className={classes.imgFull}>
                    <Typography className={classes.row2} color="primary">Custom Software Development</Typography>
                    <span className={classes.softwareQuote}>save energy. save time. save money.</span>
                    <span className={classes.softwareDetails}>Complete digital solutions, from investigation<br/> to <span>celebration.</span></span>
                    <Grid item className={classes.centerButton}><Button variant="outlined" color="primary" className={classes.LearnMore} 
                    onClick={_=>{setValue(1);setSelected(1);history.push("/services/software")}}> Learn more  <AiOutlineRight/></Button>
                </Grid></Grid>
                <Grid item>
                    <img src={software} alt="software img" className={classes.softwareImg}/>
                </Grid>
            </Grid>
            
            <Grid container justifyContent="flex-end" md className={classes.GridBlock}>
                <Grid item className={classes.imgFull}>
                    <Typography className={classes.row2} color="primary">iOS/Android App Development</Typography>
                    <span className={classes.softwareQuote}>Extend Functionality. Extend Access. increase Engagement.</span>
                    <span className={classes.softwareDetails}>integrate your web experience or create a standalone app<br/>with either mobile platform</span>
                    <Grid item className={classes.centerButton}><Button variant="outlined" color="primary" className={classes.LearnMore} 
                    onClick={_=>{setValue(1);setSelected(2);history.push("/services/mobile")}}>Learn more  <AiOutlineRight/></Button>
                </Grid></Grid>
                <Grid item>
                    <img src={mobile} alt="software img" className={classes.softwareImgBigger}/>
                </Grid>
            </Grid>

            <Grid container justifyContent="flex-start" className={classes.GridBlock}>
                <Grid item className={classes.imgFull}>
                    <Typography className={classes.row2} color="primary">Website Development</Typography>
                    <span className={classes.softwareQuote}>Reach More. Discover More. Sell More.</span>
                    <span className={classes.softwareDetails}>Optimized for Search Engines<br/> built for speed</span>
                    <Grid item className={classes.centerButton}><Button variant="outlined" color="primary" className={classes.LearnMore} 
                    onClick={_=>{setValue(1);setSelected(3);history.push("/services/website")}}>Learn more  <AiOutlineRight/></Button>
                </Grid>
                </Grid>
                <Grid item>
                    <img src={website} alt="software img" className={classes.softwareImgBigger}/>
                </Grid>
            </Grid>
        </div>
        <RevolutionBlock setValue={setValue}/>
        <InfoBlock setValue={setValue}/>
        <CallToAction setValue={setValue}/>
    </> 
}