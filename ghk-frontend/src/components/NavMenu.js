import React, { useState } from "react";
import logo from "../assets/img/logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavMenu.css";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <div>
      <div className="logo">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="follow">
          <span>Følg oss på </span>
          <a href="https://web.facebook.com/gjovikhk" target="_blank">
            <FontAwesomeIcon className="fa-icon" icon={["fab", "facebook-f"]} />
          </a>
        </div>
      </div>
      <nav className="nav">
        <div className="nav-menu">
          <ul
            className={isMobile ? "nav-link-mobile" : "nav-link"}
          >
            <li className="links">
              <Link className="anchor" to="/klubben">
                Klubben
              </Link>
            </li>
            <li className="links">
              <Link className="anchor" to="/lagene">
                Lagene
              </Link>
            </li>
            <li className="links">
              <Link className="anchor" to="terminliste">
                Terminliste
              </Link>
            </li>
            <li className="links">
              <Link className="anchor" to="kampaktivitet">
                Kampaktivitet
              </Link>
            </li>
            <li className="links">
              <Link className="anchor" to="/medlemskap">
                Medlemskap
              </Link>
            </li>
            <li className="links">
              <Link className="anchor" to="/dugnader">
                Dugnader
              </Link>
            </li>
            <li className="links">
              <Link className="anchor" to="/venner">
                GHKs venner
              </Link>
            </li>
            <li className="links">
              <Link className="anchor" to="/marked">
                Marked
              </Link>
            </li>
          </ul>
          <button
            className="mobile-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
