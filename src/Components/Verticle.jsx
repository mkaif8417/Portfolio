import React from "react";
import "./Verticle.css";
import linkedinLogo from "../assets/logo imgs/linkedin.png";
import githubLogo from "../assets/logo imgs/github.png";
import websiteLogo from "../assets/logo imgs/website.png";

const Verticle = () => {
  return (
    <div className="verticle-navbar">
      <a href="https://www.linkedin.com/in/mohd-kaif-5aba8b277/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" width="30" />
      </a>
      <a href="https://github.com/mkaif8417" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" width="30" />
      </a>
      <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
        <img src={websiteLogo} alt="My Website" width="30" />
      </a>
    </div>
  );
};

export default Verticle;
