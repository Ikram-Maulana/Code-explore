import React from "react";
import NavbarLink from "./NavbarLink";
import NavbarUser from "./NavbarUser";

const Navbar = (props) => {
  return (
    <nav>
      <NavbarLink>Dashboard</NavbarLink> | <NavbarLink>Products</NavbarLink> |
      {""}
      <NavbarLink>
        <NavbarUser user={props.user} />
      </NavbarLink>
    </nav>
  );
};

export default Navbar;
