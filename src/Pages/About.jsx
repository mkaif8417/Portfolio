import React from 'react';
import './About.css';
import myPhoto from '../assets/logo imgs/aboutimg.png'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img  src={myPhoto} alt="Md Kaif" />
          <div className="image-overlay"></div>
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m <strong>Md Kaif</strong>, a passionate Full-Stack Developer with experience in building responsive web applications using modern tools like React.js, HTML, CSS, and JavaScript.
            My goal is to create smooth and engaging user experiences through clean, accessible, and efficient code.
            I completed my <strong>B.Sc in Computer Science</strong> in 2024 and am currently learning more about full stack development at <strong>TEKS Academy(Hitech city) Hyderabad</strong>.
            I’m continuously working on projects to improve my skills and contribute meaningfully to the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;