import React, { useContext, useEffect, useState } from "react";
import "../../styles/Slider.css";
import { SliderData } from "../../assets/data/SliderData";

//todo transitions so the box appear to slide in and out

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [startSlide, setStartSlide] = useState(true);
  const screenWidth = window.innerWidth;
  const [sliderArray, setSliderArray] = useState(SliderData);
  const [sliderLength, setSliderLength] = useState(SliderData.length);

  const nextSlide = () => {
    let newArray = sliderArray;

    setCurrent(current === sliderLength - 1 ? 0 : current + 1);
    newArray.shift();
    let num = current + 1;
    if (num >= sliderLength) {
      num = 0;
    }
    if (SliderData[num]["skill"] === newArray[0]["skill"]) {
      let newNum = num + 1;
      newArray.push(SliderData[newNum]);
      console.log(SliderData[num]["skill"]);
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
            <div className="slideItem slideActive">
              <i className={`${item.image} skillImage`}></i>
              <div className="skillItem"> {item.skill}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
