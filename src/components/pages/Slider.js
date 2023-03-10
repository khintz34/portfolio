import React, { useEffect, useState } from "react";
import "../../styles/Slider.css";
import { SliderData } from "../../assets/data/SliderData";

const Slider = () => {
  const [startSlide, setStartSlide] = useState(true);

  const nextSlide = () => {
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
      <div id="sliderHolder">
        {SliderData.map((item, index) => {
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
    </div>
  );
};

export default Slider;
