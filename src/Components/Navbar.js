import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <div className="company-logo">
          <Link to="/">
            LONGDINO
          </Link></div>
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                INICIO
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/AboutUs" className="nav-link">
                SOBRE NOSOTROS
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACTANOS
              </Link>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <i className="bx bx-menu"></i>
          <i className="bx bx-x"></i>
        </div>
      <div className="linetop"></div>
      </header>
    </>
  );
}

export default Navbar;
