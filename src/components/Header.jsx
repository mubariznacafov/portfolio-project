import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <div className="img">
            <img src={logo} alt="site_logo" />
          </div>
        </div>
        <div className="pages">
          <BrowserRouter>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/work"}>Work</Link>
            <Link to={"/reviews"}>Reviews</Link>
          </BrowserRouter>
        </div>
        <div className="contact">
          <BrowserRouter>
            <Link to={"/contact"}>Contact Me</Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default Header;
