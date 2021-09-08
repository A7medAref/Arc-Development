import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { useStyle } from "./RevolutionStyle";
import consultationIcon from "../../components/ui/assets/consultationIcon.svg";
import mockup from "../../components/ui/assets/mockupIcon.svg";
import review from "../../components/ui/assets/reviewIcon.svg";
import design from "../../components/ui/assets/designIcon.svg";
import build from "../../components/ui/assets/buildIcon.svg";
import launch from "../../components/ui/assets/launchIcon.svg";
import maintain from "../../components/ui/assets/maintainIcon.svg";
import iterate from "../../components/ui/assets/iterateIcon.svg";
const sentences = ["Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.",
"Detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for.",
"Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and intuition will help usher you into this new future of possibilities.",
"After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.",
"Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.",
"This helps us understand and refine the solution itself before getting distracted by specifics and looks.",
"Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.",
"We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.",
"Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.",
"Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.",
"No aspect is superfluous, and care will be taken with every decision.",
"A second round of review is essential to our goal of creating exactly what you want, exactly how you want it.",
"This time we’ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure we get everything right the first time.",
"Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.",
"Each area is then developed in order of importance until ready to be connected to the next piece.",
"Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.",
"Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.",
"Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.",
"The moment we’ve all been waiting for.",
"When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.",
"When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.",
"Our work doesn’t end there.",
"After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.",
"From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.",
"The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.",
"By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.",
"Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.",
];
export default function Process()
{
    const classes = useStyle();
    const Theme = useTheme();
    const match = useMediaQuery(Theme.breakpoints.down("xs"));
    return<>
    {/* <Grid container justifyContent="center"><Typography variant="h3" style={{color:Theme.palette.primary.main,margin:"2rem 0"}}>Process</Typography></Grid> */}
    <Grid container style={{backgroundColor:"#aaa",padding:"0rem 0",height:"100vh"}} alignItems="center" justifyContent="space-between" direction={match?"column" : 'row'}>
        <Grid container className={[classes.consultationText, classes.marginLeft]}>
            <Typography variant="h3" style={{color:"black",margin:match ? ".5rem auto" : ".5rem 0"}}>Consultion</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="body2" style={{color:"white"}}>{sentences[0]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[1]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[2]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.consultationImgContainer}>
            <img alt="consultion-img" src={consultationIcon} className={classes.consultationImg}/>
        </Grid>
    </Grid>

    {/* <Grid container style={{backgroundColor:"#FF7373",padding:"0rem 0",height:"100vh"}} alignItems="center" justifyContent="space-between" direction={match?"column" : 'row'}>
        <Grid container className={[classes.consultationText, classes.marginLeft]}>
            <Typography variant="h3" style={{color:"black",margin:match ? ".5rem auto" : ".5rem 0"}}>Mockup</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="body2" style={{color:"white"}}>{sentences[3]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[4]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[5]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.consultationImgContainer}>
            <img alt="consultion-img" src={mockup} className={classes.consultationImg}/>
        </Grid>
    </Grid>
    
    <Grid container style={{backgroundColor:"#39B54A",padding:"0rem 0",height:"100vh"}} alignItems="center" justifyContent="space-between" direction={match?"column" : 'row'}>
        <Grid container className={[classes.consultationText, classes.marginLeft]}>
            <Typography variant="h3" style={{color:"black",margin:match ? ".5rem auto" : ".5rem 0"}}>Review</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="body2" style={{color:"white"}}>{sentences[6]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[7]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[8]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.consultationImgContainer}>
            <img alt="consultion-img" src={review} className={classes.magnifing}/>
        </Grid>
    </Grid>
    
    <Grid container style={{backgroundColor:"#A67C52",padding:"0rem 0",height:"100vh"}} alignItems="center" justifyContent="space-between" direction={match?"column" : 'row'}>
        <Grid container className={[classes.consultationText, classes.marginLeft]}>
            <Typography variant="h3" style={{color:"black",margin:match ? ".5rem auto" : ".5rem 0"}}>Design</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="body2" style={{color:"white"}}>{sentences[9]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[10]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.consultationImgContainer}>
            <img alt="consultion-img" src={design} className={classes.brush}/>
        </Grid>
    </Grid>
    
    <Grid container style={{backgroundColor:"#39B54A",padding:"0rem 0",height:"100vh"}} alignItems="center" justifyContent="space-between" direction={match?"column" : 'row'}>
        <Grid container className={[classes.consultationText, classes.marginLeft]}>
            <Typography variant="h3" style={{color:"black",margin:match ? ".5rem auto" : ".5rem 0"}}>Review</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="body2" style={{color:"white"}}>{sentences[11]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[12]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.consultationImgContainer}>
            <img alt="consultion-img" src={review} className={classes.consultationImg}/>
        </Grid>
    </Grid>

    <Grid container style={{backgroundColor:"#FBB03B",padding:"0rem 0",height:"110vh"}} alignItems="center" justifyContent="space-between" direction={match?"column" : 'row'}>
        <Grid container className={[classes.consultationText, classes.marginLeft]}>
            <Typography variant="h3" style={{color:"black",margin:match ? ".5rem auto" : ".5rem 0"}}>Build</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="body2" style={{color:"white"}}>{sentences[13]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[14]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[15]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[16]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[17]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.consultationImgContainer}>
            <img alt="consultion-img" src={build} className={classes.consultationImg}/>
        </Grid>
    </Grid>

    <Grid container style={{backgroundColor:"#C1272D",padding:"0rem 0",height:"100vh"}} alignItems="center" justifyContent="space-between" direction={match?"column" : 'row'}>
        <Grid container className={[classes.consultationText, classes.marginLeft]}>
            <Typography variant="h3" style={{color:"black",margin:match ? ".5rem auto" : ".5rem 0"}}>Launch</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="body2" style={{color:"white"}}>{sentences[18]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[19]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[20]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.consultationImgContainer}>
            <img alt="consultion-img" src={launch} className={classes.consultationImg}/>
        </Grid>
    </Grid>
    
    <Grid container style={{backgroundColor:"#8E45CE",padding:"0rem 0",height:"100vh"}} alignItems="center" justifyContent="space-between" direction={match?"column" : 'row'}>
        <Grid container className={[classes.consultationText, classes.marginLeft]}>
            <Typography variant="h3" style={{color:"black",margin:match ? ".5rem auto" : ".5rem 0"}}>Maintain</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="body2" style={{color:"white"}}>{sentences[21]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[22]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[23]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.consultationImgContainer}>
            <img alt="consultion-img" src={maintain} className={classes.consultationImg}/>
        </Grid>
    </Grid>
    
    <Grid container style={{backgroundColor:"#29ABE2",padding:"0rem 0",height:"100vh"}} alignItems="center" justifyContent="space-between" direction={match?"column" : 'row'}>
        <Grid container className={[classes.consultationText, classes.marginLeft]}>
            <Typography variant="h3" style={{color:"black",margin:match ? ".5rem auto" : ".5rem 0"}}>Iterate</Typography>
            <Grid container className={[classes.fitContent,classes.marginBottom,classes.subResp]}>
                <Typography variant="body2" style={{color:"white"}}>{sentences[24]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[25]}</Typography>
                <Typography variant="body2" style={{color:"white"}}>{sentences[26]}</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.consultationImgContainer}>
            <img alt="consultion-img" src={iterate} className={classes.consultationImg}/>
        </Grid>
    </Grid> */}
    </>
}