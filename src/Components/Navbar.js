import React from "react";
import { Router } from "react-router-dom";

function Navbar(){
    return(
        <header>
            <div className="company-logo">LONGDINO</div>
            <nav className="navbar">
            <ul className="nav-items">
                <Router>
                    <li className="nav-item"><a href="www.google.com" className="nav-link">HOME</a></li>
                    <li className="nav-item"><a href="www.google.com" className="nav-link">CONTACT</a></li>
                </Router>
            </ul>
            </nav>
            <div className="menu-toggle">
            <i className="bx bx-menu"></i>
            <i className="bx bx-x"></i>
            </div>
        </header>
    );
}

export default Navbar;

