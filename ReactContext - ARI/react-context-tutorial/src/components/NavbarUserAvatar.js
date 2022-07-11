import React from "react";
import { useAppContext } from "../context/app-context";

// Context Client
const NavbarUserAvatar = () => {
  const { user } = useAppContext();
  return <img src={user?.avatar} alt="avatar" width="50" />;
};

export default NavbarUserAvatar;
