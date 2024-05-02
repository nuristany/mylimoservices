import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/Limo-Services.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="" className="logo" />

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">fleet</Link>
          </li>
          <li>
            <Link to="/about">services</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
