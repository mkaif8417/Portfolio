import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo imgs/kaif-logo.png";
import { NavLink } from "react-router-dom";
import Home from "../Pages/Home";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="navbar">
       
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        {/* Hamburger on the right for mobile/tablet */}
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation links */}
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "isActive" : "")}
              end
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              ABOUT
            </NavLink>
          </li>
           <li>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              CONTACT
            </NavLink>
          </li>
         
          <li>
            <a
              href="/Portfolio/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="resume"
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
