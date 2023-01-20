import React from "react";
import "../../styles/Footer.css";

function Footer(props) {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer id="footerContainer">
      <div id="credits" className="footerNotes">
        <p className="footerBold ">Kevin Hintz</p>
        <p>Minneapolis, MN</p>
        <p>Ⓒ {year}</p>
      </div>

      <div id="built" className="footerNotes">
        <p className="footerBold">Built with</p>
        <p>React.js</p>
      </div>
    </footer>
  );
}

export default Footer;
