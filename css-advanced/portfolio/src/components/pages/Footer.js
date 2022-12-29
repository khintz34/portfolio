import React from "react";
import "../../styles/Footer.css";

function Footer(props) {
  return (
    <footer id="footerContainer">
      <div id="credits" className="footerNotes">
        <p className="footerBold ">Kevin Hintz</p>
        <p>Minneapolis, MN</p>
        <p>Ⓒ 2022</p>
      </div>

      <div id="built" className="footerNotes">
        <p className="footerBold">Built with</p>
        <p>React.js</p>
      </div>
    </footer>
  );
}

export default Footer;
