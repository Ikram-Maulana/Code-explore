import React, { useContext } from "react";
import AppContext from "../context/app-context";

// Context Client
const NavbarUserAvatar = () => {
  const { user } = useContext(AppContext);
  return <img src={user.avatar} alt="avatar" width="50" />;
};

export default NavbarUserAvatar;
