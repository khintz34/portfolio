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
            organization coding in COBOL and JCL and on the mainframe. The
            reason why I have gotten into front-end dev work is to usher in the
            current age of fast paced agile development and to create innovative
            web apps.
          </div>
          <div className="aboutParaClass">
            Away from the keyboard you can find me playing soccer, hanging with
            my pups, or reading a book!
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default About;
