import React from "react";
import { useTheme } from "../../hooks/useTheme";
import classes from "./index.module.css";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={classes.block}>
      <img
        width={40}
        height={40}
        src={`/img/${theme}.png`}
        alt="toggle_theme"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ToggleTheme;
