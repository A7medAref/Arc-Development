import { Button, Grid, Typography } from '@material-ui/core';
import {AiOutlineRight} from "react-icons/ai";
import { useStyle } from './HomeStyle';
import software from "../../components/ui/assets/software.svg";
import mobile from "../../components/ui/assets/mobile.svg";
import website from "../../components/ui/assets/website.svg";
import { useHistory } from 'react-router-dom';
export default function ServicesPage({value,setValue,selected,setSelected})
{
    const history = useHistory();
    const classes = useStyle();
    return <div className={classes.servicesContainer} style={{marginTop:"2rem"}}>
            <Grid item style={{margin:"2rem 0"}}><Typography className={classes.row2} color="primary">Services</Typography></Grid>
            <Grid container justifyContent="flex-end" className={classes.GridBlock}>
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
        
        <Grid container justifyContent="flex-start" md className={classes.GridBlock}>
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

        <Grid container justifyContent="flex-end" className={classes.GridBlock}>
            <Grid item className={[classes.imgFull,classes.imgServicesPage]}>
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
}