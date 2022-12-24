import React, { useContext } from "react";
import "../../styles/About.css";
import Slider from "./Slider";

function About() {
  return (
    <div id="aboutContainer">
      <div id="aboutMain">
        <div id="aboutTitle" className="typewriter">
          <h1>Kevin Codes</h1>
        </div>
        <div id="aboutPara">
          <div className="aboutParaClass">
            Hi, my name is Kevin. I am a self-taught front-end engineer
            specializing in JavaScript and React development. Currently I am
            working as an application developer, coding in COBOL and JCL, on the
            mainframe at a large financial institution. The reason why I have
            gotten into front-end dev work is to usher in the current age of
            fast paced agile dev and away from the prehistoric ways of writing
            on the mainframe.
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
