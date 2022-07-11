import React from "react";
import { useAppContext } from "../context/app-context";

// Context Client
const NavbarUserText = () => {
  const [{ user }] = useAppContext();
  return <span>Hi, {user?.name}!</span>;
};

export default NavbarUserText;
