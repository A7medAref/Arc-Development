import { makeStyles } from "@material-ui/core";
import { theme } from "../../components/ui/theme";
export const useStyle = makeStyles({
    LightPrimary:{
        color:theme.palette.primary.light
    },
    estimateButton:{
        color:"white",
        fontFamily:"pacifico",
        borderRadius:50,
        margin:"1rem 5px",
        padding:".5em 0",
        textTransform:"none",
        fontSize:"1.2em"
    },
    sub1Resp:{
        [theme.breakpoints.down("xs")]:{
            fontSize:".7em"
        }
    },
    dialogPaper:{
        maxWidth:"20em",
        padding:"1rem 5rem",
        [theme.breakpoints.down("xs")]:{
            maxWidth:"17em",
            padding:"1rem 1rem"
        }
    },
    disableLinkStyle:{
        textDecoration:"none",
        color:theme.palette.primary.light,
    }
})