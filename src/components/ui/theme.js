import {createTheme} from "@material-ui/core";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
export const theme = createTheme({
    palette:{
        common:{arcBlue,arcOrange},
        primary:{
            main: `${arcBlue}`
        },
        secondary:{
            main: arcOrange
        }
    },
    typography:{
        tab:
        {
            fontWeight:"bold",
            textTransform:"none",
            fontSize:"1rem"
        },
        heading:{
            fontFamily:"Raleway",
            fontWeight:"bold",
            fontSize:"2rem",
            lineHeight:"1.2"
        },
        normal:{
        display:"block",
        color:"#999",
        fontSize:"1.1rem",
        fontFamily:"Arial"
        },
        h3:{
            fontFamily:"Raleway",
            fontWeight:"bold",
            fontSize:"2rem",
            lineHeight:"1.2",
            color:arcBlue
        },
        h4:{
            fontFamily:"Raleway",
            fontWeight:"bold",
            fontSize:"1.6rem",
            lineHeight:"1.2",
            color:arcBlue
        },
        h5:{
            fontFamily:"Raleway",
            fontWeight:"bold",
            fontSize:"1.3rem",
            lineHeight:"1.2",
            color:arcBlue
        },
        subtitle2:{
            display:"block",
            color:"#999",
            fontSize:"1rem",
            fontFamily:"Arial",
            lineHeight:"1.3"
        },
        body2:{
            display:"block",
            color:"#999",
            fontSize:".9rem",
            fontFamily:"Arial",
            lineHeight:"1.3"
        },
        subtitle1:{
            display:"block",
            color:"#999",
            fontSize:"1.1rem",
            fontFamily:"Arial",
            lineHeight:"1.3"
        }
    },
    overrides:
    {
        MuiInputLabel:{
            root:{
                color: arcBlue,
                fontSize: "1em"
            },
        },
        MuiInput:{
            input:{
                color:"#666",
                fontWeight:"300",
                fontSize:"1em"
            }
            ,underline:
            {
                "&:before":{
                    borderBottom:`2px solid ${arcBlue}` 
                },
                "&:hover:not($disabled):not($focused):not($error):before":{
                    borderBottom:`2px solid ${arcBlue}`
                }
            }
        }
    }
})