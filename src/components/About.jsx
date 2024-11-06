import React from "react";
import "../scss/pages/about/_about.scss";
import logo from "../assets/logo.svg";
import FigmaLogo from "../assets/figma.svg";
import CSSLogo from "../assets/css3.svg";
import JavaScript from "../assets/javascript.svg";
import MongoDB from "../assets/mongodb.svg";
import NodeJs from "../assets/nodejs.svg";
import Favicon from "../assets/favicon.svg";
import ExpressJs from "../assets/expressjs.svg";
import ReactLogo from "../assets/react.svg";
import Tailwind from "../assets/tailwindcss.svg";
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
      <div className="tools">
        <div className="top_info">
          <h1>Essential tools I use</h1>
          <p>
            Discover the powerful tools and technologies i use to create
            exceptional, high-performing websites & applications.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="img">
              <img src={FigmaLogo} alt="figma_logo" />
            </div>
            <div className="tool_name">
              <h5>Figma</h5>
              <p>Design tool</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={CSSLogo} alt="css_logo" />
            </div>
            <div className="tool_name">
              <h5>CSS</h5>
              <p>User Interface</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={JavaScript} alt="figma_logo" />
            </div>
            <div className="tool_name">
              <h5>JavaScript</h5>
              <p>Interaction</p>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src={NodeJs} alt="figma_logo" />
            </div>
            <div className="tool_name">
              <h5>NodeJS</h5>
              <p>Web Server</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={ExpressJs} alt="figma_logo" />
            </div>
            <div className="tool_name">
              <h5>ExpressJS</h5>
              <p>Node Framework</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={MongoDB} alt="figma_logo" />
            </div>
            <div className="tool_name">
              <h5>MongoDB</h5>
              <p>Database</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={ReactLogo} alt="figma_logo" />
            </div>
            <div className="tool_name">
              <h5>React</h5>
              <p>Framework</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={Tailwind} alt="figma_logo" />
            </div>
            <div className="tool_name">
              <h5>Figma</h5>
              <p>User Interface</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
