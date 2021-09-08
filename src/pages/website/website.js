import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { useGlobalStyle } from "../../components/ui/Global";
import analytics from "../../components/ui/assets/analytics.svg";
import ecommerce from "../../components/ui/assets/ecommerce.svg";
import outreach from "../../components/ui/assets/outreach.svg";
const sentences = ["Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.",
"From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.",
"Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.",
"It’s no secret that people like to shop online.",
"In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie."]
export default function WebsitePage()
{
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('sm'))
    const global = useGlobalStyle();
    return <>
        <Grid container style={{margin:"0 0 6rem"}}>
            <Grid container justifyContent={match ? "center":undefined} style={{margin:match ? "0 0 6rem" :"0 3rem 8rem"}}>
                <Grid item xs={11} sm={10} lg={5} md={7}>
                    <Typography gutterBottom variant="h3" className={global.headerMediumResp}>Website Development</Typography>
                    <Typography style={{marginBottom:"1.1rem"}} variant="subtitle2" className={global.sub2Resp}>{sentences[0]}</Typography>
                    <Typography variant="subtitle2" className={global.sub2Resp}>{sentences[1]}</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container xs={11} sm={10} lg={7} md={8} alignItems="center" style={{margin:match ?"auto":undefined}}>
                    <Grid container ><Typography style={{margin:match ?"auto" :"0 0 1rem 3rem"}} variant="h4" className={global.headerMediumResp}>Analytics</Typography></Grid>
                    <Grid container style={{width:"fit-content",margin:match ?"auto":undefined}}><img src={analytics} alt="ayalytics" style={{maxWidth:"12rem",margin:match?"1rem 0":"0 0 0 1.5rem"}}/></Grid>
                    <Grid container lg={6} md={6} ><Typography variant="subtitle2" className={global.sub2Resp}>{sentences[2]}</Typography></Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container>
            <Grid container justifyContent="flex-end">
                <Grid container xs={11} sm={10} lg={7} md={8} alignItems="center" justifyContent={match ? "center" :"flex-end"} style={{margin:match ? "auto" : "0 3rem 0 0"}}>
                    <Grid container direction="column" style={{width:"13rem"}}>
                        <Typography variant="h4" style={{textAlign:match?"center":undefined }} className={global.headerMediumResp}>E-Commerce</Typography>
                        <img src={ecommerce} alt="e-commerce" style={{maxWidth:match ?"9rem" : "12rem",margin:match?"0 auto 1rem":undefined}}/>
                    </Grid>
                    <Grid container lg={6} md={6} direction="column">
                        <Typography variant="subtitle2" className={[global.sub2Resp,global.marginBottomSub]}>{sentences[3]}</Typography>
                        <Typography variant="subtitle2" className={global.sub2Resp}>{sentences[4]}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{margin:"6rem 0"}}>
                <Grid container xs={11} sm={10} lg={7} md={8} alignItems="center" style={{margin:match ?"auto":undefined}}>
                    <Grid container ><Typography style={{margin:match ?"auto" :"0 0 1rem 3rem"}} variant="h4" className={global.headerMediumResp}>Outreach</Typography></Grid>
                    <Grid container style={{width:"fit-content",margin:match ?"auto":undefined}}><img src={outreach} alt="outreach" style={{maxWidth:"12rem",margin:match?"1rem 0":"0 0.5rem 0 2rem"}}/></Grid>
                    <Grid container lg={6} md={6} ><Typography variant="subtitle2" className={global.sub2Resp}>{sentences[2]}</Typography></Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
}