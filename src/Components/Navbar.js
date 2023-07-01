import React from "react";

function Navbar(){
    return(
        <header>
            <div className="company-logo">LongDino</div>
            <nav className="navbar">
            <ul className="nav-items">
                <li className="nav-item"><a href="www.google.com" className="nav-link">HOME</a></li>
                <li className="nav-item"><a href="https://api.whatsapp.com/send?phone=+56936681029&text=Hola, Quisiera hacer unas consultas."  target="_blank" rel="noreferrer" className="nav-link">CONTACT</a></li>
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
