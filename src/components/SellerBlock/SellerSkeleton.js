import React from "react";
import ContentLoader from "react-content-loader";
import classes from "./index.module.css";

const SellerSkeleton = () => (
  <ContentLoader
    className={classes.skeleton}
    speed={2}
    width={420}
    height={205}
    viewBox="0 0 420 205"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
   <rect x="535" y="233" rx="3" ry="3" width="88" height="6" /> 
    <rect x="506" y="64" rx="3" ry="3" width="52" height="6" /> 
    <rect x="448" y="233" rx="3" ry="3" width="410" height="6" /> 
    <rect x="553" y="571" rx="3" ry="3" width="380" height="6" /> 
    <rect x="452" y="226" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="585" cy="235" r="20" /> 
    <rect x="503" y="489" rx="0" ry="0" width="196" height="30" /> 
    <rect x="528" y="506" rx="0" ry="0" width="120" height="24" /> 
    <rect x="550" y="512" rx="0" ry="0" width="222" height="12" /> 
    <rect x="548" y="510" rx="0" ry="0" width="220" height="12" /> 
    <rect x="438" y="164" rx="0" ry="0" width="270" height="271" /> 
    <rect x="493" y="568" rx="0" ry="0" width="184" height="24" /> 
    <rect x="481" y="547" rx="0" ry="0" width="123" height="35" /> 
    <rect x="474" y="573" rx="0" ry="0" width="180" height="13" /> 
    <rect x="522" y="567" rx="0" ry="0" width="241" height="16" /> 
    <rect x="575" y="246" rx="0" ry="0" width="16" height="3" /> 
    <rect x="555" y="239" rx="0" ry="0" width="38" height="21" /> 
    <rect x="564" y="236" rx="0" ry="0" width="37" height="9" /> 
    <rect x="0" y="0" rx="10" ry="10" width="170" height="205" /> 
    <rect x="205" y="19" rx="5" ry="5" width="100" height="30" /> 
    <rect x="205" y="55" rx="5" ry="5" width="100" height="20" /> 
    <rect x="205" y="88" rx="5" ry="5" width="200" height="20" /> 
    <rect x="205" y="129" rx="5" ry="5" width="210" height="62" />
  </ContentLoader>
);

export default SellerSkeleton;
