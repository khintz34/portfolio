import React, { useContext, useRef } from "react";
import { NavbarOpenContext } from "../../contexts/NavbarOpenContext";
import "../../styles/Main.css";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Headline from "./Headline";
import PortfolioContainer from "./PortfolioContainer";

function Main() {
  const { navbarOpen, setNavbarOpen } = useContext(NavbarOpenContext);
  const checkClickLocation = (e) => {
    if (navbarOpen) {
      if (e.target.className !== "menuNav  showMenu") setNavbarOpen(false);
    }
  };

  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const headlineRef = useRef(null);

  return (
    <div id="mainContainer" onClick={(e) => checkClickLocation(e)}>
      <Header
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        headlineRef={headlineRef}
      />
      <Headline headlineRef={headlineRef} aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <PortfolioContainer portfolioRef={portfolioRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default Main;
