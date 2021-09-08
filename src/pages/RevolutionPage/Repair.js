import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { useStyle } from "./RevolutionStyle";
import Lottie from "react-lottie";
import animationData from "../../components/ui/animations/technologyAnimation/data.json";
const Sentences = ["In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website development."
,"Instead of chaining together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving asingular purpose."
,"Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward."
,"This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React."
,"Developers have since built on top of these systems by automating project setup and deployment, allowing creators to focus as much as possible on their work itself."
,"These technical advancements translate into savings by significantly reducing the workload and streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development."
,"This puts personalization in your pocket — faster, better, and more affordable than ever before."]
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
};
export default function Repair()
{
    const classes = useStyle();
    const Theme = useTheme();
    const match = useMediaQuery(Theme.breakpoints.down("md"));
    return<> 
    <Grid container direction={match ? "column" : "row"} alignItems="center" justifyContent="space-between" style={{marginBottom:"3rem",padding:match ?"0 5px":"0"}}>
        <Grid container direction="column" className={[classes.RepairText,classes.marginLeft]}>
            <Typography variant="h3" className={classes.headerResp}>Technology</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="subtitle2">{Sentences[0]}</Typography>
                <Typography variant="subtitle2">{Sentences[1]}</Typography>
                <Typography variant="subtitle2">{Sentences[2]}</Typography>
                <Typography variant="subtitle2">{Sentences[3]}</Typography>
                <Typography variant="subtitle2">{Sentences[4]}</Typography>
                <Typography variant="subtitle2">{Sentences[5]}</Typography>
                <Typography variant="subtitle2">{Sentences[6]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.RepairImgContainer} justifyContent="center" alignItems="center">
            <Lottie options={defaultOptions} style={{maxWidth:"500px",margin: match ? "0 auto":"40px"}}/>
        </Grid>
    </Grid></>
}