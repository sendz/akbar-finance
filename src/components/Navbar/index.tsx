import React from "react";
import { Link } from "react-router-dom";
import { NavbarEl, NavHeader, NavList, NavListItem } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <NavbarEl>
      <NavHeader>
        Akbar.Finance
      </NavHeader>
      <NavList>
        <NavListItem>
          <Link to="/">
            Home
          </Link>
        </NavListItem>
        <NavListItem>
          <Link to="/product">
            Product
          </Link>
        </NavListItem>
        <NavListItem>
          <Link to="/">
            Help
          </Link>
        </NavListItem>
      </NavList>
    </NavbarEl>
  )
}