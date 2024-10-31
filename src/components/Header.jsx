import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../scss/pages/header/_header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <BrowserRouter>
          <Link to={"/"}>
            <div className="img">
              <img src={logo} alt="site_logo" />
            </div>
          </Link>
        </BrowserRouter>
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
  );
};

export default Header;
