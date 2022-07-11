import React from "react";
import { useAppContext } from "../context/app-context";

const DisplayToggleTheme = () => {
  const [, dispatch] = useAppContext();

  return (
    <button onClick={() => dispatch({ type: "toggleTheme" })}>
      Toggle Theme
    </button>
  );
};

export default DisplayToggleTheme;
