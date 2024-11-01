import React from "react";
import "../scss/pages/hero/_hero.scss";
import PersonalPhoto from "../assets/person_photo.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left_side">
        <h3>Aveliable for work</h3>
        <h1>Building Scalable Modern Websites for the Future</h1>
        <div className="buttons">
          <div className="download_btn">
            <button>Download CV</button>
          </div>
          <div className="scroll_down_btn">
            <button>Scroll down</button>
          </div>
        </div>
      </div>
      <div className="right_side">
        <div className="img">
          <img src={PersonalPhoto} alt="person_photo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
