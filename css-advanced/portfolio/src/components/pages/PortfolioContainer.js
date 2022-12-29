import React from "react";
import "../../styles/Projects.css";
import Project from "./Project";
import projectPic from "../../assets/images/projectPic.png";

//todo align portfolio left
//todo large screen portfolio is getting cut off

function PortfolioContainer() {
  return (
    <div id="portfolioContainer">
      <div id="portfolioHeader" className="typewriter">
        <h1>Portfolio</h1>
      </div>
      <div id="portfolioMain">
        <Project
          image={projectPic}
          name="Project Name"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          github="https://www.github.com"
          live="google.com"
        />
        <Project
          image={projectPic}
          name="Project 2"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          github="https://www.github.com"
          live="google.com"
        />
        <Project
          image={projectPic}
          name="Project 3"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          github="https://www.github.com"
          live="google.com"
        />
      </div>
    </div>
  );
}

export default PortfolioContainer;
