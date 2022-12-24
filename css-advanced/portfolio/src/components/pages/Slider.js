import React, { useContext, useEffect, useState } from "react";
import "../../styles/Slider.css";
import carPic from "../../assets/images/car-in.png";
import oceanPic from "../../assets/images/ocean-in.png";
import ppPic from "../../assets/images/pp.jpeg";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const SliderData = [
    {
      skill: "JavaScript",
    },
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
    {
      skill: "React",
    },
    {
      skill: "VS Code",
    },
  ];

  const [sliderArray, setSliderArray] = useState([
    SliderData[0],
    SliderData[1],
  ]);

  const sliderLength = SliderData.length;

  const nextSlide = () => {
    // console.log("current", current);
    setCurrent(current === sliderLength - 1 ? 0 : current + 1);
    let newArray = sliderArray;
    newArray.shift();
    let num = current + 2;
    if (num >= sliderLength) {
      num = 0;
    }
    // console.log("num", num);
    console.log(newArray[0]);
    console.log(SliderData[num]);
    if (SliderData[num]["skill"] === newArray[0]["skill"]) {
      let newNum = num + 1;
      newArray.push(SliderData[newNum]);
    } else {
      newArray.push(SliderData[num]);
    }
    setSliderArray(newArray);
  };

  const prevSlide = () => {
    console.log("prev");
    setCurrent(current === 0 ? sliderLength - 1 : current - 1);
  };

  useEffect(() => {
    console.log("uE current", current);
    console.log(sliderArray);
  }, [current]);

  return (
    <div id="sliderContainer" className="slider">
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        className="left-arrow"
        onClick={prevSlide}
        onTouchStart={prevSlide}
      />
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        className="right-arrow"
        onClick={nextSlide}
      />
      {/* <img src={carPic} /> */}
      {sliderArray.map((item, index) => {
        // console.log(item.image);
        return (
          <div
            // className={
            // index === current ? "slideItem slideActive" : "slideItem"
            // }
            key={index}
          >
            <div
              className={
                "slideItem slideActive"
                // " slideItem slideActive"
              }
            >
              {item.skill}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
