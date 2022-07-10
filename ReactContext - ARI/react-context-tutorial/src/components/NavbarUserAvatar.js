import React from "react";

const NavbarUserAvatar = ({ user }) => {
  return <img src={user.avatar} alt="avatar" width="50" />;
};

export default NavbarUserAvatar;
