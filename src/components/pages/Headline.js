import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/Headline.css";

function Headline(props) {
  const scrollTo = () => {
    props.aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div id="headlineContainer" ref={props.headlineRef}>
      <div className="lineContainer">
        <div className="line2"></div>
      </div>
      <h1 className="headingTitle" id="heading1">
        Kevin
      </h1>
      <h1 className="headingTitle" id="heading2">
        Hintz
      </h1>
      <h1 className="headingTitle" id="heading3">
        Software
      </h1>
      <h1 className="headingTitle" id="heading4">
        Engineer
      </h1>
      <div className="arrow">
        <FontAwesomeIcon
          icon={faArrowAltCircleDown}
          className="faArrow"
          onClick={scrollTo}
        />
      </div>
    </div>
  );
}

export default Headline;
