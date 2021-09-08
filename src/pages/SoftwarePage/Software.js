// import { useStyle } from "./SoftwareStyle";
import DataAnalysis from "./DataAnalysis";
import Tree from "./TreeSection";
import LastSection from "./wheel";
import WhyUs from "./whyUs";
export default function SoftwarePage()
{
    return<div>
        <WhyUs/>
        <DataAnalysis/>
        <Tree/>
        <LastSection/>
    </div>
}