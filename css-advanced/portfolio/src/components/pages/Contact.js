import React from "react";
import "../../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  const goToURL = () => {
    window.open("https://www.linkedin.com/in/kevin-p-hintz");
  };

  const openGitURL = () => {
    window.open("https://github.com/khintz34");
  };
  return (
    <div id="contactContainer" ref={props.contactRef}>
      <div id="contactHeader" className="typewriter">
        <h1>Contact</h1>
      </div>
      <div id="contactMain">
        <div className="contactPara">You can reach me at</div>
        <div id="contactEmail">khintz34gmail.com</div>
        <br></br>
        <div className="iconHolder">
          <i
            className="devicon-github-original contactIcon"
            onClick={openGitURL}
          ></i>
          <p className="contactMsg">-- GitHub</p>
        </div>
        <div className="iconHolder">
          <i
            className="devicon-linkedin-plain contactIcon"
            onClick={goToURL}
          ></i>
          <p className="contactMsg">-- LinkedIn</p>
        </div>
        <div className="iconHolder">
          <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
          <p className="contactMsg">-- Email</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
