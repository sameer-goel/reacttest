import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/user">
          User
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/search">
          Search
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/about">
          AboutUs
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">
          ContactUS
        </NavLink>
        {/* <a href="/"> Home </a>
        <a href="/about"> AboutUS </a>
        <a href="/contact"> ContactUS </a> */}
      </div>
    </>
  );
};

export default Navbar;
