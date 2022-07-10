import React, { useContext } from "react";
import AppContext from "../context/app-context";

const DisplayTheme = () => {
  const { theme } = useContext(AppContext);

  return <div>{theme}</div>;
};

export default DisplayTheme;
