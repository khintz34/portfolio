import React, { useContext, useEffect, useState } from "react";
import "../../styles/Slider.css";
import {
  SliderData,
  sliderDataSmall,
  sliderDataLarge,
} from "../../assets/data/SliderData";

//todo transitions so the box appear to slide in and out

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [startSlide, setStartSlide] = useState(true);
  const screenWidth = window.innerWidth;
  const [sliderLength, setSliderLength] = useState(0);
  const [sliderArray, setSliderArray] = useState([]);

  useEffect(() => {
    if (screenWidth > 550) {
      setSliderArray([
        SliderData[0],
        SliderData[1],
        SliderData[2],
        SliderData[3],
        SliderData[4],
        SliderData[5],
        SliderData[6],
      ]);
    }
  }, []);

  useEffect(() => {
    setSliderLength(sliderArray.length);
  }, [sliderArray]);

  const nextSlide = () => {
    let newArray = [];
    if (sliderArray.length === 0) {
      if (screenWidth <= 550) {
        newArray = sliderDataSmall;
      } else {
        newArray = sliderDataLarge;
      }
    } else {
      newArray = sliderArray;
    }
    setCurrent(current === sliderLength - 1 ? 0 : current + 1);
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

  useEffect(() => {
    setTimeout(nextSlide, 3000);
  }, [startSlide]);

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
