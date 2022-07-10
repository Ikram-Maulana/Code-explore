import React, { useContext } from "react";
import AppContext from "../context/app-context";

const DisplayToggleTheme = () => {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
};

export default DisplayToggleTheme;
