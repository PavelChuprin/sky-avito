import React from "react";
import ContentLoader from "react-content-loader";
import classes from "./index.module.css";

const CardSkeleton = () => (
  <ContentLoader
    className={classes.skeleton}
    speed={2}
    width={270}
    height={440}
    viewBox="0 0 270 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="535" y="233" rx="3" ry="3" width="88" height="6" />
    <rect x="506" y="64" rx="3" ry="3" width="52" height="6" />
    <rect x="448" y="233" rx="3" ry="3" width="410" height="6" />
    <rect x="341" y="229" rx="3" ry="3" width="380" height="6" />
    <rect x="452" y="226" rx="3" ry="3" width="178" height="6" />
    <circle cx="585" cy="235" r="20" />
    <rect x="503" y="489" rx="0" ry="0" width="196" height="30" />
    <rect x="528" y="506" rx="0" ry="0" width="120" height="24" />
    <rect x="550" y="512" rx="0" ry="0" width="222" height="12" />
    <rect x="548" y="510" rx="0" ry="0" width="220" height="12" />
    <rect x="0" y="0" rx="10" ry="10" width="270" height="270" />
    <rect x="0" y="290" rx="5" ry="5" width="180" height="25" />
    <rect x="0" y="350" rx="5" ry="5" width="100" height="35" />
    <rect x="0" y="400" rx="5" ry="5" width="180" height="15" />
    <rect x="0" y="425" rx="5" ry="5" width="240" height="15" />
  </ContentLoader>
);

export default CardSkeleton;
