import React, { useContext, useState } from "react";
import "../../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolid, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavbarOpenContext } from "../../contexts/NavbarOpenContext";

function Header() {
  const { navbarOpen, setNavbarOpen } = useContext(NavbarOpenContext);
  const [navbarShow, setNavbarShow] = useState("hideNav");

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div id="headerContainer">
      <p id="leftHeader">Kevin Hintz</p>
      <div id="rightHeaderLarge">
        <p>About</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>

      <nav id="rightHeaderDropdown" className="navBar">
        <div onClick={handleToggle} id="rightHeaderSmall">
          <FontAwesomeIcon icon={faBars} className="iconWidth openBtn" />
        </div>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : " hideNav"}`}>
          <li className="menuItem" onClick={() => closeMenu()} exact="true">
            About
          </li>
          <li className="menuItem" onClick={() => closeMenu()} exact="true">
            Portfolio
          </li>
          <li className="menuItem" onClick={() => closeMenu()} exact="true">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
