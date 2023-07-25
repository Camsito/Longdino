import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <div className="company-logo">LONGDINO</div>
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <i className="bx bx-menu"></i>
          <i className="bx bx-x"></i>
        </div>
      </header>
      <div className="linetop"></div>
    </>
  );
}

export default Navbar;
