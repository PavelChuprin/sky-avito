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
    <rect x="0" y="0" rx="10" ry="10" width="270" height="270" />
    <rect x="0" y="290" rx="5" ry="5" width="180" height="25" />
    <rect x="0" y="350" rx="5" ry="5" width="100" height="35" />
    <rect x="0" y="400" rx="5" ry="5" width="180" height="15" />
    <rect x="0" y="425" rx="5" ry="5" width="240" height="15" />
  </ContentLoader>
);

export default CardSkeleton;
