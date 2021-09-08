import Process from "./Process";
import Repair from "./Repair";
import { useStyle } from "./RevolutionStyle";
import VisionSection from "./Vision";

export default function Revolution()
{
    const classes = useStyle();
    return<> <div className={classes.PageContainer}>
        <VisionSection/>
        <Repair/>
    </div>
        <Process/></>
}