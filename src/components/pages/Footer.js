import React from "react";
import "../../styles/Footer.css";

function Footer(props) {
  const date = new Date();
  let year = date.getFullYear();

  const goToURL = () => {
    window.open("https://www.linkedin.com/in/kevin-p-hintz");
  };

  const openGitURL = () => {
    window.open("https://github.com/khintz34");
  };

  return (
    <footer id="footerContainer">
      <div id="credits" className="footerNotes">
        <p className="footerBold ">Kevin Hintz</p>
        <p>Minneapolis, MN</p>
        <p>Ⓒ {year}</p>
      </div>
      <div className="footerIcons">
        <div className="iconHolder">
          <i
            className="devicon-github-original contactIcon"
            onClick={openGitURL}
          ></i>
        </div>
        <div className="iconHolder">
          <i
            className="devicon-linkedin-plain contactIcon"
            onClick={goToURL}
          ></i>
        </div>
      </div>

      <div id="built" className="footerNotes">
        <p className="footerBold">Built with</p>
        <p>React.js</p>
      </div>
    </footer>
  );
}

export default Footer;
