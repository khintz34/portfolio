import React from "react";
import "../../styles/Projects.css";
import Project from "./Project";
import hipcamp from "../../assets/images/hipcamp.png";
import ispy from "../../assets/images/ispy.png";
import dadmode from "../../assets/images/dadmode.png";
import milk from "../../assets/images/milk.png";
import footballapi from "../../assets/images/footballapi.png";
import workout from "../../assets/images/workout.png";
import dadmodeDemo from "../../assets/videos/dadmodeDemo.mp4";
import hipcampDemo from "../../assets/videos/hipcampDemo.mp4";
import ispyDemo from "../../assets/videos/ispyDemo.mp4";
import milkDemo from "../../assets/videos/ispyDemo.mp4";
import footballDemo from "../../assets/videos/ispyDemo.mp4";
import workoutDemo from "../../assets/videos/ispyDemo.mp4";

function PortfolioContainer(props) {
  return (
    <div id="portfolioContainer" ref={props.portfolioRef}>
      <div id="portfolioHeader" className="typewriter">
        <h1>Portfolio</h1>
      </div>
      <div id="portfolioMain">
        <Project
          image={milk}
          video={milkDemo}
          name="Pump End Date Calculator"
          para="This was a project I made for my wife to find out when she can be done pumping based on critiera like stored milk, oz needed per day, and oz saved, and milk end date. It was created using React and Next.js, and is deployed through Vercel."
          github="https://github.com/khintz34/milk-bottle-storage"
          live="https://milk-bottle-storage.vercel.app/"
        />
        <Project
          image={hipcamp}
          video={hipcampDemo}
          name="Hipcamp Clone"
          para="This site is a clone of the popular camping website, Hipcamp. It utilizes Google Firebase to read and write new campsites from the database to the UI. Users can search for campsites via name, state, city, numbers of guests, pet friendly status and more. After one finds the perfect site they can book it. Additionally, users who would like to add new campsites to the database can do so if authenticated. This site was built using React.js. "
          github="https://github.com/khintz34/hipcamp-clone-TOP"
          live="https://khintz34.github.io/hipcamp-clone-TOP/#/"
        />
        <Project
          image={footballapi}
          video={footballDemo}
          name="EPL Team Tracker"
          para="This project was made to practice using APIs in a variety of different ways. It was created using React, Next.js, and API-Football from RapidAPI. The basic premise is you can find stats, schedules, rosters, and standings from each team in the English Premier League."
          github="https://github.com/khintz34/milk-bottle-storage"
          live="https://milk-bottle-storage.vercel.app/"
        />
        <Project
          image={ispy}
          video={ispyDemo}
          name="I Spy"
          para="I Spy is an interative game where users can see how quickly they can find a list of items in an image. Featuring six different levels and a global leaderboard for each image, they can see how they stack up againt the competition. I Spy was created with React.js and Google Firebase."
          github="https://github.com/khintz34/i-spy"
          live="https://khintz34.github.io/i-spy/"
        />
        <Project
          image={dadmode}
          video={dadmodeDemo}
          name="Dad Mode"
          para="Dad Mode is an online shopping site where dads from all walks of life can find solace by buying dad shoes, jorts, lawn mowers, or even fanny packs. As a user shops they can add items to their cart and see their goods and total price when they go to check out. Dad Mode was created using React.js. "
          github="https://github.com/khintz34/shopping-cart"
          live="https://khintz34.github.io/shopping-cart/#/shop"
        />
        <Project
          image={workout}
          video={workoutDemo}
          name="Workout Generator"
          para="I found myself doing the same workouts over and over again with little variation. Even when I tried a new exercise I would forget about it the next time I lifted. So I created a workout generator app that gives you a list of exercises based on muscle groups or exercise types that you input. It randomizes the returned result so you won't be doing the same workout twice in a row. This workout generator was created using React, GH Pages, and the Exercise API from API-Ninja."
          github="https://github.com/khintz34/milk-bottle-storage"
          live="https://milk-bottle-storage.vercel.app/"
        />
      </div>
    </div>
  );
}

export default PortfolioContainer;
