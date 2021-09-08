import { makeStyles } from "@material-ui/core";
import { theme } from "../ui/theme";

export const useStyle = makeStyles({
    footer:{background:theme.palette.primary.main,width:"100%",position:"absolute"},
    Img:{height:"17em",verticalAlign:"bottom",
    [theme.breakpoints.down("md")]:
    {height:"15em"},
    [theme.breakpoints.down("xs")]:
    {height:"7em"}
    },
    mainGrid:{position:"absolute",width:"100%",top:"0"},
    gridItem:{
    },
    gridLink:{
        textDecoration:"none",
        fontFamily:"Arial",
        color:"White",
        margin:"2em 2em 0",
        [theme.breakpoints.down("md")]:
        {
            margin:"2em 1em 0",
        }
    },
    icon:{
        position:"absolute",
        right:"1em",
        bottom:"10px",
        "&> *":{
            color:"white",fontSize:"3em",
            [theme.breakpoints.down("xs")]:
        {fontSize:"2em",marginBottom:"5px"}
        }
    },
    signiture:{
        position:"absolute",
        top:"5px",
        left:"5px",
        fontFamily:"Arial",
        color:"#ccc",
        fontSize:".5rem",
        "&> span":{
            color:"#ddd",
            fontWeight:"bold",
            fontSize:".6rem"
        }
    }
})