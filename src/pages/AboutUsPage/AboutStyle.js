import { makeStyles } from "@material-ui/core";
import { theme } from "../../components/ui/theme";
export const useStyle = makeStyles({
    AboutCard:{
        maxWidth:"90%",
        boxSizing:"border-box",
        margin:"2rem auto",
        padding:"2rem 8rem",
        textAlign:"center",
        [theme.breakpoints.down("md")]:{padding:"2rem 5rem",},
        [theme.breakpoints.down("sm")]:{padding:"3rem 3rem",},
        [theme.breakpoints.down("xs")]:{padding:"1rem 1rem",},
    },
    AboutCardText:{
        lineHeight:"1.3",
        color:theme.palette.primary.light,
        [theme.breakpoints.down("sm")]:{fontSize:"1.1rem"},
        [theme.breakpoints.down("xs")]:{fontSize:".8rem"},
    },
    specialText:{
        lineHeight:"1.3",
        fontSize:"1.2rem",
        fontWeight:"bold",
        color:'#777',
        fontStyle:"italic",
        [theme.breakpoints.down("sm")]:{fontSize:"1.1rem"},
        [theme.breakpoints.down("xs")]:{fontSize:".8rem"}
    },
    ImgBook:{
        position:"relative",
        top:"-2rem",
        [theme.breakpoints.down("md")]:{
            top:0,
            maxWidth:"25rem"
        },
        [theme.breakpoints.down("sm")]:{
            maxWidth:"20rem"
        },
        [theme.breakpoints.down("xs")]:{
            maxWidth:"13rem"
        }
    },
    handleImgs:{
        maxHeight:'14rem',
        maxWidth:'14rem'
    }
})