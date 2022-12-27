import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/Headline.css";

function Headline() {
  return (
    <div id="headlineContainer">
      <div className="line2"></div>
      <h1 className="headingTitle" id="heading1">
        Kevin
      </h1>
      <h1 className="headingTitle" id="heading2">
        Hintz
      </h1>
      <h1 className="headingTitle" id="heading3">
        Web
      </h1>
      <h1 className="headingTitle" id="heading4">
        Developer
      </h1>
      <div className="arrow">
        <FontAwesomeIcon icon={faArrowAltCircleDown} />
      </div>
    </div>
  );
}

export default Headline;
