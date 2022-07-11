import React from "react";
import { useAppContext } from "../context/app-context";

const DisplayToggleTheme = () => {
  const { theme, setTheme } = useAppContext();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
};

export default DisplayToggleTheme;
