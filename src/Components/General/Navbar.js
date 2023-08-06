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
                Inicio
              </Link>
            </li>
             <li className="nav-item">
              <Link to="/Presets" className="nav-link">
                Catalogo
              </Link>
            </li> 
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contactanos
              </Link>
            </li>
          </ul>
        </nav>
        <div className="linetop"></div>
      </header>
    </>
  );
}

export default Navbar;
