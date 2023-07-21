import React from "react";
import { FaPersonBooth } from 'react-icons/fa'
import logo from "../Assets/logo.png"
const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar__left">
        <img
          src={logo}
          alt="Company Logo"
          className="navbar__logo"
        />
      </div>

      <div className="navbar__right">
        <FaPersonBooth/>
      </div>
    </nav>
  );
};

export default Navbar;
