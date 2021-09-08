import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { useStyle } from "./RevolutionStyle";
import visionImg from "../../components/ui/assets/vision.svg";
const Sentences = ["The rise of computers, and subsequently the Internet, has completely altered every aspect of human life. This has increased our comfort, broadened our connections, and reshaped how we view the world.",
"What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.",
"We want to help businesses capitalize on the latest and greatest technology. The best way to predict the future is to be the one building it, and we want to help guide the world into this next chapter of technological expansion, exploration, and innovation.",
"By holding ourselves to rigorous standards and pristine quality, we can ensure you have the absolute best tools necessary to thrive in this new frontier.",
"We see a future where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that goal."]
export default function VisionSection()
{
    const classes = useStyle();
    const Theme = useTheme();
    const match = useMediaQuery(Theme.breakpoints.down("md"));
    return<> 
    {/* <Typography variant="h3" className={[classes.headerResp,classes.marginLeft,classes.PageTitle]}>The Revolution</Typography> */}
    <Grid container direction={match ? "column" : "row-reverse"} alignItems="center" justifyContent="space-between" style={{margin: match ? "2rem auto 6rem" :"5rem 0 6rem"}}>
        <Grid container direction="column" className={[classes.visionText,classes.marginRight]}>
            <Typography variant="h3" className={classes.headerResp}>Vision</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="subtitle2">{Sentences[0]}</Typography>
                <Typography variant="subtitle2">{Sentences[1]}</Typography>
                <Typography variant="subtitle2">{Sentences[2]}</Typography>
                <Typography variant="subtitle2">{Sentences[3]}</Typography>
                <Typography variant="subtitle2">{Sentences[4]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.visionImg} justifyContent="center" alignItems="center">
            <img alt="vision" src={visionImg} className={classes.visionImgOrigin}/>
        </Grid>
    </Grid></>
}