import React, { useContext, useEffect, useState } from "react";
import "../../styles/Slider.css";
import { SliderData } from "../../assets/data/SliderData";

//todo transitions so the box appear to slide in and out
//todo media quiery so large screens have more boxes

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [startSlide, setStartSlide] = useState(true);

  const [sliderArray, setSliderArray] = useState([
    SliderData[0],
    SliderData[1],
    SliderData[2],
    SliderData[3],
  ]);

  const sliderLength = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === sliderLength - 1 ? 0 : current + 1);
    let newArray = sliderArray;
    newArray.shift();
    let num = current + 1;
    if (num >= sliderLength) {
      num = 0;
    }
    if (SliderData[num]["skill"] === newArray[0]["skill"]) {
      let newNum = num + 1;
      newArray.push(SliderData[newNum]);
    } else {
      newArray.push(SliderData[num]);
    }
    setSliderArray(newArray);
    if (startSlide) {
      setStartSlide(false);
    } else {
      setStartSlide(true);
    }
  };

  const prevSlide = () => {
    console.log("prev");
    setCurrent(current === 0 ? sliderLength - 1 : current - 1);
    let newArray = sliderArray;
    newArray.pop();
    let num = current - 1;
    if (num <= 0) {
      num = sliderLength - 1;
    }
    if (SliderData[num]["skill"] === newArray[0]["skill"]) {
      let newNum = num - 1;
      newArray.unshift(SliderData[newNum]);
    } else {
      newArray.unshift(SliderData[num]);
    }
    setSliderArray(newArray);
    if (startSlide) {
      setStartSlide(false);
    } else {
      setStartSlide(true);
    }
  };

  useEffect(() => {
    console.log("uE current", current);
    console.log(sliderArray);
  }, [current]);

  useEffect(() => {
    function testing() {
      console.log("testing n0w");
    }
    setTimeout(nextSlide, 5000);
  }, [startSlide]);

  function runSlides() {
    if (startSlide) {
      nextSlide();
      setTimeout(runSlides, 5000);
    }
  }

  return (
    <div id="sliderContainer" className="slider">
      {sliderArray.map((item, index) => {
        return (
          <div key={index}>
            <div className={"slideItem slideActive"}>{item.skill}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
