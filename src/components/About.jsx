import React from "react";
import "../scss/pages/about/_about.scss";
import logo from "../assets/logo.svg";
const About = () => {
  return (
    <div className="about">
      <div className="general_information">
        <div className="card">
          <div className="top_information">
            <p>
              Hi, I'm Mubariz, I'm a web developer, I'm in the last year of my
              university, I'm interested in creating responsive and high-quality
              websites that can serve people. Motivated and detail-oriented
              front-end developer seeking new opportunities to apply and expand
              my skills. Completed a front-end development course and eager to
              gain real-world experience in the field.
            </p>
          </div>
          <div className="bottom_information">
            <div className="left_side">
              <div className="projects">
                <h1>10+</h1>
                <p>Projects done</p>
              </div>
              <div className="experience">
                <h1>1.5+</h1>
                <p>Years of experience</p>
              </div>
            </div>
            <div className="right_side">
              <div className="img">
                <img src={logo} alt="site_logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
