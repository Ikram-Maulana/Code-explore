import React from "react";
import NavbarLink from "./NavbarLink";
import NavbarUser from "./NavbarUser";

const Navbar = () => {
  return (
    <nav>
      <NavbarLink>Dashboard</NavbarLink> | <NavbarLink>Products</NavbarLink> |
      {""}
      <NavbarLink>
        <NavbarUser />
      </NavbarLink>
    </nav>
  );
};

export default Navbar;
