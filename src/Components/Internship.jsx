import React from "react";
import "./Internship.css"; 

import p1 from "../assets/logo-imgs/p1.png";
import p2 from "../assets/logo-imgs/p2.png";
import p3 from "../assets/logo-imgs/p3.png";
import p4 from "../assets/logo-imgs/p4.png";

const Internship = () => {
  return (
    <section className="internship-section">
      <h2 > Internship Experience</h2>

      <div className="internship-card">
        <h3>Frontend / UI-UX Designer Intern</h3>
        <p>INFOZ IT Solutions, Hyderabad</p>
        <p>October 2025 – December 2025 (3 Months)</p>

        <ul>
          <li>Designed user-friendly interfaces and user flows for a movie ticket booking website (QUICKSHOW).</li>
          <li>Focused on usability, responsive layouts, and clean visual design.</li>
          <li>Worked with HTML, CSS, JavaScript, React, and Figma for UI development.</li>
          <li>Collaborated with team members and followed real-world project requirements.</li>
        </ul>


           <div className="project-images">
          <img src={p1} alt="QUICKSHOW Project" />
          <img src={p2} alt="Project review" />
          <img src={p3} alt="Project review" />
          <img src={p4} alt="Project review" />
        </div>

        <a
          href="https://mkaif8417.github.io/QUICKSHOW/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Project →
        </a>
      </div>
    </section>
  );
};

export default Internship;
