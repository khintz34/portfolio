import React, { useState, useRef } from "react";
import "../../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const form = useRef();

  const goToURL = () => {
    window.open("https://www.linkedin.com/in/kevin-p-hintz");
  };

  const openGitURL = () => {
    window.open("https://github.com/khintz34");
  };

  const sendMessage = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_3jqayt1",
        "template_i95l6fd",
        form.current,
        "fitA2DfM5MFIUHPvT"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div id="contactContainer" ref={props.contactRef}>
      <div id="contactHeader" className="typewriter">
        <h1>Contact</h1>
      </div>
      <div id="contactMain">
        <div className="contactPara">You can reach out via the form below</div>
        <form
          className="contactFormContainer"
          onSubmit={(e) => sendMessage(e)}
          ref={form}
        >
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            id="from_message"
            name="from_message"
            rows="4"
            placeholder="Enter your message here!"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
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
      </div>
    </div>
  );
}

export default Contact;
