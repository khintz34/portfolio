import React, { useState, useRef } from "react";
import "../../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

 

  const sendMessage = (e) => {
    e.preventDefault();
    let data = { name: name, email: email, message: message };
    emailjs
      .sendForm(
        "service_3jqayt1",
        "template_i95l6fd",
        form.current,
        "fitA2DfM5MFIUHPvT"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Sent");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Message Failed to Send. Please Try Again. ");
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
            className="formInput smallInput"
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="formInput smallInput"
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Your Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="formInput largeInput"
            id="from_message"
            name="from_message"
            rows="6"
            placeholder="Enter your message here!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="submitBtnContainer">
            <button type="submit" className="contactSubmitBtn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
