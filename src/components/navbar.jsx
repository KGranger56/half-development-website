import React from "react";
import { Link } from "react-router-dom";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";*/

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/home" className="navHome">
              Half Development
            </Link>
          </li>
          <li>
            <Link to="/about" className="navAbout">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
