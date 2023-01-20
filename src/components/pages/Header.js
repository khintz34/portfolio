import React, { useContext, useState, useRef } from "react";
import "../../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavbarOpenContext } from "../../contexts/NavbarOpenContext";

function Header(props) {
  console.log(props);
  const { navbarOpen, setNavbarOpen } = useContext(NavbarOpenContext);

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const scrollTo = (num) => {
    let item;

    if (num === 1) {
      item = props.aboutRef.current;
    } else if (num === 2) {
      item = props.portfolioRef.current;
    } else if (num === 3) {
      item = props.contactRef.current;
    } else {
      item = props.headlineRef.current;
    }

    item.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMenu(0);
  };

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div id="headerContainer" className="headerContainerClass">
      <div className="headerMain">
        <p id="leftHeader" className="largeHeader" onClick={() => scrollTo(4)}>
          Kevin Hintz
        </p>
        <div id="rightHeaderLarge">
          <p onClick={() => scrollTo(1)} className="largeHeader">
            About
          </p>
          <p onClick={() => scrollTo(2)} className="largeHeader">
            Portfolio
          </p>
          <p onClick={() => scrollTo(3)} className="largeHeader">
            Contact
          </p>
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
        </nav>
      </div>
      <div id="sideNav" className="sideNav">
        <ul className={`menuNav ${navbarOpen ? " showMenu" : " hideNav"}`}>
          <li className="menuItem" onClick={() => scrollTo(1)} exact="true">
            About
          </li>
          <li className="menuItem" onClick={() => scrollTo(2)} exact="true">
            Portfolio
          </li>
          <li className="menuItem" onClick={() => scrollTo(3)} exact="true">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
