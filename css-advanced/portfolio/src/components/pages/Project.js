import React from "react";
import "../../styles/Projects.css";

function Project(props) {
  const goToURL = () => {
    window.open(props.live);
  };

  const openGitURL = () => {
    window.open(props.github);
  };
  return (
    <div id="projectContainer">
      <div id="projectMain">
        <h1 className="projectName">{props.name}</h1>
        <div className="projectImageContainer">
          <img src={props.image} alt={props.alt} className="projectPic" />
        </div>
        <div>
          <p className="projectPara">{props.para}</p>
        </div>
        <div className="projectLinksContainer">
          <button className="codeBtn" onClick={goToURL}>
            Live Code
          </button>
          <button className="codeBtn" onClick={openGitURL}>
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
