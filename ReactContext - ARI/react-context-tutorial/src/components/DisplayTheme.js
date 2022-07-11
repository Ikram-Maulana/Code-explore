import React from "react";
import { useThemeContext } from "../context/theme-context";

const DisplayTheme = () => {
  const [{ theme }] = useThemeContext();

  console.log("DisplayTheme: render");

  return <div>{theme}</div>;
};

export default DisplayTheme;
