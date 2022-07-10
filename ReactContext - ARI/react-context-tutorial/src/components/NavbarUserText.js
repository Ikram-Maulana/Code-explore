import React, { useContext } from "react";
import AppContext from "../context/app-context";

// Context Client
const NavbarUserText = () => {
  const { user } = useContext(AppContext);
  return <span>Hi, {user.name}!</span>;
};

export default NavbarUserText;
