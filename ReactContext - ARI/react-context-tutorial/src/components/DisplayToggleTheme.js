import React from "react";
import { useThemeContext } from "../context/theme-context";

const DisplayToggleTheme = () => {
  const [, dispatch] = useThemeContext();

  return (
    <button onClick={() => dispatch({ type: "toggleTheme" })}>
      Toggle Theme
    </button>
  );
};

export default DisplayToggleTheme;
