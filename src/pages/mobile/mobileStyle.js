import { makeStyles } from "@material-ui/core";
import { theme } from "../../components/ui/theme";
export const useStyle = makeStyles({
    
    ///////////////////////////
    handleImgs:{
        textAlign:"center",
        [theme.breakpoints.down("sm")]:{
            marginBottom:"4rem"
        }
    },
    handleImgs3:{
        [theme.breakpoints.only("md")]:{
            marginTop:"3rem"
        }
    },
    Img1:{maxWidth:"11rem",[theme.breakpoints.down('xs')]:{maxWidth:"9rem"}},
    Img2:{maxWidth:"27rem",[theme.breakpoints.down('xs')]:{maxWidth:"15rem"}},
    Img3:{maxWidth:"11rem",[theme.breakpoints.down('xs')]:{maxWidth:"9rem"}},
    marginVerticalMedium:{[theme.breakpoints.up("md")]:{margin:'10rem 0 5rem'}}
})