import React from "react";
import { Link } from "react-router-dom";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="navList">
          <li>
            <Link to="/home" className="navHome">
              <div className="navBrand">
                <img
                  src="https://i.lensdump.com/i/1SALSK.jpg"
                  alt="1SALSK.jpg"
                  border="0"
                  className="navLogo"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about" className="navAbout">
              About
            </Link>
          </li>
          <li>
            <Link to="/application" className="navApplicaiton">
              Application
            </Link>
          </li>
          <li>
            <Link to="/team" className="navTeam">
              Team
            </Link>
          </li>
          <li>
            <Link to="/products" className="navProducts">
              Products
            </Link>
          </li>
          <li>
            <Link to="/pastProjects" className="navPastProjects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
