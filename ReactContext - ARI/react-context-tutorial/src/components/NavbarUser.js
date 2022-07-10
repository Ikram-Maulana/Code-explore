import React from "react";
import NavbarUserAvatar from "./NavbarUserAvatar";
import NavbarUserText from "./NavbarUserText";

const NavbarUser = (props) => {
  return (
    <div>
      <NavbarUserAvatar user={props.user} />
      <NavbarUserText user={props.user} />
    </div>
  );
};

export default NavbarUser;
