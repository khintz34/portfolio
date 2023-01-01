import React, { useContext, useState } from "react";
import "../../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavbarOpenContext } from "../../contexts/NavbarOpenContext";

//todo slide in navbar
//todo width 100vw navbar

function Header() {
  const { navbarOpen, setNavbarOpen } = useContext(NavbarOpenContext);
  const [navbarShow, setNavbarShow] = useState("hideNav");

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const scrollAbout = () => {
    const about = document.getElementById("aboutTitle");
    about.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMenu();
  };

  const scrollPortfolio = () => {
    const portfolio = document.getElementById("portfolioContainer");
    portfolio.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMenu();
  };

  const scrollContact = () => {
    const contact = document.getElementById("contactContainer");
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMenu();
  };

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div id="headerContainer" className="headerContainerClass">
      <p id="leftHeader">Kevin Hintz</p>
      <div id="rightHeaderLarge">
        <p onClick={scrollAbout}>About</p>
        <p onClick={scrollPortfolio}>Portfolio</p>
        <p onClick={scrollContact}>Contact</p>
      </div>

      <nav id="rightHeaderDropdown" className="navBar">
        {!navbarOpen ? (
          <div onClick={handleToggle} id="rightHeaderSmall">
            <FontAwesomeIcon icon={faBars} className="iconWidth openBtn" />
          </div>
        ) : (
          <div onClick={handleToggle} className="xBtnContainer">
            <div className="iconWidth openBtn xBtn">X</div>
          </div>
        )}
        <ul className={`menuNav ${navbarOpen ? " showMenu" : " hideNav"}`}>
          <li className="menuItem" onClick={scrollAbout} exact="true">
            About
          </li>
          <li className="menuItem" onClick={scrollPortfolio} exact="true">
            Portfolio
          </li>
          <li className="menuItem" onClick={scrollContact} exact="true">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
