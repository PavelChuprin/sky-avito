import React from "react";
import ContentLoader from "react-content-loader";
import classes from "./index.module.css";

const AdsSkeleton = () => (
  <ContentLoader
    className={classes.skeleton}
    speed={2}
    width={800}
    height={600}
    viewBox="0 0 800 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="15" ry="15" width="480" height="480" />
    <rect x="0" y="510" rx="5" ry="5" width="88" height="88" />
    <rect x="98" y="510" rx="5" ry="5" width="88" height="88" />
    <rect x="196" y="510" rx="5" ry="5" width="88" height="88" />
    <rect x="294" y="510" rx="5" ry="5" width="88" height="88" />
    <rect x="391" y="510" rx="5" ry="5" width="88" height="88" />
    <rect x="530" y="0" rx="5" ry="5" width="140" height="50" />
    <rect x="530" y="67" rx="5" ry="5" width="110" height="20" />
    <rect x="530" y="93" rx="5" ry="5" width="100" height="20" />
    <rect x="530" y="120" rx="5" ry="5" width="90" height="20" />
    <rect x="530" y="174" rx="5" ry="5" width="100" height="38" />
    <rect x="530" y="229" rx="5" ry="5" width="210" height="60" />
    <circle cx="565" cy="347" r="35" />
    <rect x="610" y="320" rx="5" ry="5" width="100" height="20" />
    <rect x="610" y="350" rx="5" ry="5" width="180" height="20" />
  </ContentLoader>
);

export default AdsSkeleton;
