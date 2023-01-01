import React from "react";
import "../../styles/Projects.css";
import Project from "./Project";
import projectPic from "../../assets/images/projectPic.png";
import hipcamp from "../../assets/images/hipcamp.png";
import ispy from "../../assets/images/ispy.png";
import dadmode from "../../assets/images/dadmode.png";

function PortfolioContainer() {
  const findHeights = () => {};

  return (
    <div id="portfolioContainer">
      <div id="portfolioHeader" className="typewriter">
        <h1>Portfolio</h1>
      </div>
      <div id="portfolioMain">
        <Project
          image={hipcamp}
          name="Hipcamp Clone"
          para="This site is a clone of the popular camping website, Hipcamp. It utilizes Google Firebase to read and write new campsites from the database to the UI. Users can search for campsites via name, state, city, numbers of guests, pet friendly status and more. After one finds the perfect site they can book it. Additionally, users who would like to add new campsites to the database can do so if authenticated. This site was built using React.js. "
          github="https://github.com/khintz34/hipcamp-clone-TOP"
          live="https://khintz34.github.io/hipcamp-clone-TOP/#/"
        />
        <Project
          image={ispy}
          name="I Spy"
          para="I Spy is an interative game where users can see how quickly they can find a list of items in an image. Featuring six different levels and a global leaderboard for each image, they can see how they stack up againt the competition. I Spy was created with React.js and Google Firebase."
          github="https://github.com/khintz34/i-spy"
          live="https://khintz34.github.io/i-spy/"
        />
        <Project
          image={dadmode}
          name="Dad Mode"
          para="Dad Mode is an online shopping site where dads from all walks of life can find solace by buying dad shoes, jorts, lawn mowers, or even fanny packs. As a user shops they can add items to their cart and see their goods and total price when they go to check out. Dad Mode was created using React.js. "
          github="https://github.com/khintz34/shopping-cart"
          live="https://khintz34.github.io/shopping-cart/#/shop"
        />
      </div>
    </div>
  );
}

export default PortfolioContainer;
