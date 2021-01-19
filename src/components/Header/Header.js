import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header>
      <nav className="nav-container flex">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex">
          <ul className="nav-links flex">
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Courses</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
          <button className="bttn">Log In</button>
          <button className="bttn bttn-primary">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
