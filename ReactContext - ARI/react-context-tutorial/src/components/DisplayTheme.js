import React from "react";
import { useAppContext } from "../context/app-context";

const DisplayTheme = () => {
  const [{ theme }] = useAppContext();

  return <div>{theme}</div>;
};

export default DisplayTheme;
