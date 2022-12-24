import React, { useContext } from "react";
import { NavbarOpenContext } from "../../contexts/NavbarOpenContext";
import "../../styles/Main.css";
import About from "./About";
import Header from "./Header";

function Main() {
  const { navbarOpen, setNavbarOpen } = useContext(NavbarOpenContext);
  const checkClickLocation = (e) => {
    if (navbarOpen) {
      if (e.target.className !== "menuNav  showMenu") setNavbarOpen(false);
    }
  };

  return (
    <div id="mainContainer" onClick={(e) => checkClickLocation(e)}>
      <Header />
      <About />
    </div>
  );
}

export default Main;
