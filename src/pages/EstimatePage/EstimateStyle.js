import { makeStyles } from "@material-ui/core";
import { theme } from "../../components/ui/theme";

export const useStyle = makeStyles({
    ButtonCard:{
        padding:"5px",
        maxWidth:"20rem",
        minWidth:"14rem",
    },
    estimateButton:{
        color:"white",
        fontFamily:"pacifico",
        borderRadius:50,
        margin:"1rem 5px",
        padding:".3em 2rem",
        textTransform:"none",
        fontSize:"1.2em"
    },
    centerUnderMd:{
        margin:"1rem 0 3rem 3rem",
        [theme.breakpoints.down('md')]:{
            margin:"1rem auto 0"
        }
    },
    center:{
        [theme.breakpoints.down('md')]:{
            margin:"0rem auto"
        }
    },
    paddingRight:{
        paddingRight:"1rem",
        [theme.breakpoints.down('md')]:{
            padding:"0",
            margin:"3rem 0 1rem"
        }
    },
    CardsContainer:{
        marginBottom:"1rem",
        maxWidth:"85vw",
        [theme.breakpoints.only("md")]:{
            margin:"1rem 0"
        },
        [theme.breakpoints.down("sm")]:{
            "& > *":{
                marginBottom:"1rem"
            }
        }
    },
    dialogPaper:{
        width:"100vw",
        padding:"2rem 7rem",
        [theme.breakpoints.down("xs")]:{
            maxWidth:"17em",
            padding:"1rem 1rem"
        }
    }
})