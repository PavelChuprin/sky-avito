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
    <rect x="564" y="671" rx="3" ry="3" width="88" height="6" />
    <rect x="559" y="660" rx="3" ry="3" width="52" height="6" />
    <rect x="510" y="669" rx="3" ry="3" width="410" height="6" />
    <rect x="560" y="667" rx="3" ry="3" width="380" height="6" />
    <rect x="528" y="666" rx="3" ry="3" width="178" height="6" />
    <circle cx="593" cy="672" r="20" />
    <rect x="546" y="657" rx="0" ry="0" width="196" height="30" />
    <rect x="565" y="665" rx="0" ry="0" width="120" height="24" />
    <rect x="561" y="667" rx="0" ry="0" width="222" height="12" />
    <rect x="579" y="664" rx="0" ry="0" width="220" height="12" />
    <rect x="564" y="630" rx="0" ry="0" width="270" height="271" />
    <rect x="503" y="658" rx="0" ry="0" width="184" height="24" />
    <rect x="477" y="658" rx="0" ry="0" width="123" height="35" />
    <rect x="505" y="667" rx="0" ry="0" width="180" height="13" />
    <rect x="529" y="668" rx="0" ry="0" width="241" height="16" />
    <rect x="572" y="673" rx="0" ry="0" width="16" height="3" />
    <rect x="566" y="660" rx="0" ry="0" width="38" height="21" />
    <rect x="571" y="669" rx="0" ry="0" width="37" height="9" />
    <rect x="571" y="619" rx="100" ry="100" width="170" height="205" />
    <rect x="541" y="657" rx="5" ry="5" width="100" height="30" />
    <rect x="519" y="663" rx="5" ry="5" width="100" height="20" />
    <rect x="527" y="654" rx="5" ry="5" width="200" height="20" />
    <rect x="534" y="664" rx="10" ry="10" width="210" height="62" />
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
