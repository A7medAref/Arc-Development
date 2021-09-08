import { makeStyles } from "@material-ui/core";
import {theme} from "../../components/ui/theme";
import repeatingBackground from "../../components/ui/assets/repeatingBackground.svg";
import infoBackground from "../../components/ui/assets/infoBackground.svg";
import Background from "../../components/ui/assets/background.jpg";
import BackgroundMobile from "../../components/ui/assets/mobileBackground.jpg";

export const useStyle = makeStyles({
    row1col1:{
        width:"fit-content",
        marginLeft:"8rem",
        [theme.breakpoints.down("md")]:{
            width:"50%",
            margin:"0"
        },
        [theme.breakpoints.down("xs")]:{
            width:"100%",
        }
    },
    row1col1Text:{
        ...theme.typography.heading,
        marginBottom:"1rem",
        [theme.breakpoints.down("md")]:{
            textAlign:"center"
        }
    },
    row1col1Buttons:{
        "& > *":
        {
            fontWeight:"bold",
            margin:"0 1rem",
            [theme.breakpoints.down("xs")]:{margin:"0 .5rem"},
            [theme.breakpoints.down("md")]:{
                fontSize:"13px"
            },
            textTransform:"none",
            borderRadius:"50px",
            "&:first-child":{color:"white",fontFamily:"pacifico",fontWeight:"normal"}
        }
    },
    row1col1Animation:{
        width:"400px",
        marginTop:"2em",
        [theme.breakpoints.down("md")]:{
            width:"40%"
        },
        [theme.breakpoints.down("xs")]:{
            width:"90%",
            margin: "2rem auto"
        }
    },
    ///////////////////////////////////////
    //////////////////////////////////////
    /////////////////////////////////////
    servicesContainer:{
        margin:"5rem 5%",
        [theme.breakpoints.down("sm")]:
        {margin:"5rem 5px"},
        [theme.breakpoints.down("xs")]:
        {margin:"3rem 5px"}
    },
    GridBlock:{
        marginBottom:"3rem",
        [theme.breakpoints.down("sm")]:
        {justifyContent:"center",marginBottom:"8rem"},
        [theme.breakpoints.down("xs")]:
        {marginBottom:"6rem"}
    },
    row2:{
        ...theme.typography.heading,
        fontSize:"1.7rem",
        lineHeight:"1.2",
        [theme.breakpoints.down("sm")]:
        {textAlign:"center"}
    },
    softwareQuote:{
        ...theme.typography.normal,
        marginBottom:"1rem",
        [theme.breakpoints.down("sm")]:
        {textAlign:"center",fontSize:".9em"},
        [theme.breakpoints.down("xs")]:{fontSize:".8em"}
    },
    softwareDetails:{
        ...theme.typography.normal,
        marginBottom:"1rem",
        lineHeight:"1.3",
        [theme.breakpoints.down("sm")]:
        {textAlign:"center",fontSize:".9em"},
        [theme.breakpoints.down("xs")]:{fontSize:".8em"},
        "& > span":{
            fontFamily:"pacifico",
            color:theme.palette.secondary.main,
        }
    },
    softwareImg:{
        width:"9rem",
        marginLeft:"1rem"
    },
    softwareImgBigger:{
        width:"12rem",
        marginLeft:"1rem"
    },
    imgFull:{
        [theme.breakpoints.down("sm")]:
        {width:"100%"}
    },
    buttonrow2:{
        borderRadius:"50px",fontWeight:"bold",textTransform:"none",
    },
    centerButton:{
        [theme.breakpoints.down("sm")]:
        {textAlign:"center",marginBottom:"2rem"}
    },
    ///////////////////////////////////////////////
    //////////////////////////////////////////////
    /////////////////////////////////////////////
    revolutionBackground:{
        backgroundImage:`url(${repeatingBackground})`,
        backgroundRepeat:"repeat",
        backgroundSize:"cover",
        height:"100vh",
        margin:"10rem 0 0"
    },
    RevolutionSection:{
        width:"60%",
        height:"350px",
        padding:"0 5px",
        boxShadow:"0 5px 20px rgba(0,0,0,.3)",
        [theme.breakpoints.down("md")]:{width:"80%"},
        [theme.breakpoints.down("sm")]:{width:"90%"},
        [theme.breakpoints.down("xs")]:{height:"300px"}
    },
    RevolutionCard:{
        height:"100%"
    },
    revolutionMainText:{
        fontFamily:"pacifico",
        [theme.breakpoints.down("sm")]:{fontSize:"1.6rem"},
        [theme.breakpoints.down("xs")]:{fontSize:"1.4rem"}
    },
    revolutionText:{
        color:"#888",
        margin:".5rem 0 .7rem",
        textAlign:"center",
        lineHeight:"1.2"
    },
    LearnMore:{
        borderRadius:"50px",
        border:`2px solid ${theme.palette.primary.main}`,
        textTransform:"none",
        fontWeight:"bold",
        [theme.breakpoints.down("xs")]:{fontSize:".9rem"}
    },
    /////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    InfoSection:{
        backgroundImage:`url(${infoBackground})`,
        backgroundSize:"cover",
        width:"100%",
        height:"100vh"
    },
    fitContent:{width:"fit-content",
                [theme.breakpoints.down("xs")]:
                {width:"100%"}},
    InfoItem:{
        margin:"0 5rem",
        [theme.breakpoints.down("sm")]:
        {margin:"0 2rem"},
        [theme.breakpoints.down("xs")]:
        {margin:"1rem 0"}
    },
    PositionInfo:{
        height:"100%",
        [theme.breakpoints.down("xs")]:
        {textAlign:"center"}
    },
    InfoMainText:{
        color:"white",
        fontWeight:"bold",
        [theme.breakpoints.down("sm")]:{fontSize:"2.5em"},
        [theme.breakpoints.down("xs")]:{fontSize:"2.2em"}
    },
    InfoText:{
        color:"white",
        marginBottom:"4px"
    },
    whiteButton:{
        color:"white",
        border:"3px white solid"
    },
    ///////////////////////////////////////////
    /////////////////////////////////////
    CallBackground:{
        height:"75vh",
        width:"100%",
        backgroundImage:`url(${Background})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        [theme.breakpoints.down("sm")]:{backgroundImage:`url(${BackgroundMobile})`,backgroundPosition:"bottom",textAlign:"center"},
    },
    lastRow:{
        ...theme.typography.heading,
        fontSize:"2rem",
        lineHeight:"1.2",
        [theme.breakpoints.down("sm")]:
        {textAlign:"center",fontSize:"1.8em"}
    },
    marginLeft:{
        marginLeft:"5rem",
    },
    estimateButton:{
        borderRadius:"50px",
        fontFamily: "pacifico",
        color:"white",
        textTransform:"none",
        padding: '.75rem 1.3rem'
    },
    ////////////////////////
    imgServicesPage:{
        [theme.breakpoints.up("md")]:{
            width:"23rem"
        }
    }
    /////////////////////
});