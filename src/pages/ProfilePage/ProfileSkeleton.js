import React from "react";
import ContentLoader from "react-content-loader";
import classes from "./index.module.css";

const ProfileSkeleton = () => (
  <ContentLoader
    className={classes.skeleton}
    speed={2}
    width={835}
    height={520}
    viewBox="0 0 835 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="40" rx="5" ry="5" width="450" height="40" />
    <rect x="0" y="117" rx="5" ry="5" width="150" height="50" />
    <rect x="0" y="180" rx="0" ry="0" width="250" height="30" />
    <circle cx="90" cy="331" r="90" />
    <rect x="200" y="237" rx="5" ry="5" width="295" height="45" />
    <rect x="200" y="307" rx="5" ry="5" width="295" height="45" />
    <rect x="505" y="237" rx="5" ry="5" width="295" height="45" />
    <rect x="200" y="377" rx="5" ry="5" width="602" height="45" />
    <rect x="200" y="470" rx="5" ry="5" width="150" height="50" />
  </ContentLoader>
);

export default ProfileSkeleton;
