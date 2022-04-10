import React, { useState } from "react";
import "./NavMenu.css";

const NavMenu = () => {
  const [isMobile, setisMobile] = useState(false);
  return (
    <nav className="nav-menu">
      <ul>
        <li>Klubben</li>
        <li>Lagene</li>
        <li>Terminliste</li>
      </ul>
      <button className="btn">
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default NavMenu;
