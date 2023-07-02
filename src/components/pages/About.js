import React from "react";
import "../../styles/About.css";
import Slider from "./Slider";

function About(props) {
  return (
    <div id="aboutContainer">
      <div id="aboutMain">
        <div id="aboutTitle" className="typewriter" ref={props.aboutRef}>
          <h1>About Me</h1>
        </div>
        <div id="aboutPara">
          <div className="aboutParaClass">
            Hi, my name is Kevin. I am a software engineer with a passion for
            Web Development! Currently I am working for a large finanical
            organization as a backend engineer working on a system that services
            millions of transactions every day. The reason why I have gotten
            into front-end dev work because I love taking data and turning it
            into a user-friendly interactive web app.
          </div>
          <div className="aboutParaClass">
            Away from the keyboard you can find me with my family, playing
            soccer, hanging with my pups, or reading a book!
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default About;
