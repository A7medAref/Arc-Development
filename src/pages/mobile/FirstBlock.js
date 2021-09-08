import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import iphone from "../../components/ui/assets/iphone.svg";
import { useGlobalStyle } from "../../components/ui/Global";
const sentences = ["Mobile apps allow you to take your tools on the go.",
`Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.`,
"Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.",
"This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.",
"Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.",
"This significantly reduces costs and creates a more unified brand experience across all devices."];
export default function FirstBlock()
{
    const global = useGlobalStyle();
    const Theme = useTheme();
    const matchSm = useMediaQuery(Theme.breakpoints.down("sm"));
    return <Grid container direction="column" style={{marginBottom:"2rem"}}>
        <Grid container justifyContent={matchSm ? "center" : undefined}
            style={{margin:matchSm?"2rem auto 0rem":"2rem 0 7rem 3rem"}} md={5} sm={10} xs={11}>
            <Grid item xs={12}><Typography variant="h3" className={global.headerResp}>iOS/Android App Development</Typography></Grid>
            <Grid item xs={12}><Typography variant="subtitle2" style={{marginBottom:"1rem"}} className={global.sub2Resp}>{sentences[0]}</Typography></Grid>
            <Grid item xs={12}><Typography variant="subtitle2" style={{marginBottom:"1rem"}} className={global.sub2Resp}>{sentences[1]}</Typography></Grid>
            <Grid item xs={12}><Typography variant="subtitle2" className={global.sub2Resp}>Convenience. Connection.</Typography></Grid>
        </Grid>
        {/* ////////////////////////////////////// */}
        <Grid container xs={12} justifyContent="center">
            <Grid container md={4} sm={10} xs={11}>
                <div style={{margin: matchSm ? "4rem 0 2rem" : "3rem 0 0 3rem"}}>
                    <Typography variant="h4" gutterBottom className={global.headerMediumResp}>Integration</Typography>
                    <Typography variant="subtitle2" style={{marginBottom:"1rem"}} className={global.sub2Resp}>{sentences[2]}</Typography>
                    <Typography variant="subtitle2" className={global.sub2Resp}>{sentences[3]}</Typography>
                </div>
                <div></div>
            </Grid>

            <Grid container md={4} sm={10} xs={11} justifyContent="center">
                <Grid container xs={12} justifyContent="center"><img alt="iphone" src={iphone} style={{maxWidth:"20rem"}}/></Grid>
            </Grid>
            
            <Grid container md={4} sm={10} xs={11}>
                <div style={{margin:matchSm ? "3rem 0 3rem" :"3rem 3rem 0 0",textAlign:"right"}}>
                    <Typography variant="h4" gutterBottom className={global.headerMediumResp}>Simultaneous Platform Support</Typography>
                    <Typography variant="subtitle2" style={{marginBottom:"1rem"}} className={global.sub2Resp}>{sentences[4]}</Typography>
                    <Typography variant="subtitle2" style={{marginBottom:"1rem"}} className={global.sub2Resp}>{sentences[5]}</Typography>
                </div>
                <div></div>
            </Grid>
        </Grid>
    </Grid>
}