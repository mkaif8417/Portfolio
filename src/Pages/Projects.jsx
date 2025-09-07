import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Portfolio Website',
    tech: ' HTML, CSS, React+Vite',
    description: 'A personal portfolio showcasing my skills, experience, and projects, built with React and Vite.',
    github: 'https://github.com/mkaif8417/Portfolio',
    preview: 'https://mkaif8417.github.io/Portfolio/'
  },
  {
  name: 'Trenzy E-commerce',
  tech: 'MERN',
  description: 'An e-commerce practice project built with the MERN stack — frontend completed and live, backend under development. Implements product listings, cart, and checkout flows for learning full-stack concepts.',
  github: 'https://github.com/mkaif8417/trenzy.git',
  preview: 'https://mkaif8417.github.io/trenzy/'
},
  {
    name: 'SDWot Clone Website',
    tech: 'HTML,CSS,React+vite',
    description: 'A fully responsive clone of the SDWot software company website based in Hyderabad, replicating its layout, design, and functionality for practice and learning purposes.',
    github: 'https://github.com/mkaif8417/SDWOT-clone',
    preview: 'https://mkaif8417.github.io/SDWOT-clone/'
  },
  

  {
    name: 'Battery Level Checker',
    tech: 'HTML, CSS, JavaScript',
    description: 'A web tool to check device battery level using the Battery API, with simple UI and logic.',
    github:'https://github.com/mkaif8417/BatteryLevelChecker',
   preview: 'https://mkaif8417.github.io/BatteryLevelChecker/'
  },
    {
    name: 'ColorChanger-Project',
    tech: 'HTML,Tailwind css,React+Vite',
    description: 'A React app built with Vite and Tailwind CSS that lets users change the page background color dynamically. It showcases React state management and responsive design with clean, fast tooling.',
    github:'https://github.com/mkaif8417/ColorChangerBy_React-Vite',
     preview: 'https://mkaif8417.github.io/ColorChangerBy_React-Vite/'
  },
  {
    name: 'IncomeTax-Calculator',
    tech: 'HTML,CSS ,javaScript',
    description: 'A responsive weather app using a public weather API to fetch and display real-time data.',
    github:'https://github.com/mkaif8417/INCOME-TAX-CALCULATOR',
    preview: 'https://mkaif8417.github.io/INCOME-TAX-CALCULATOR/'
    
  },
  {
    name: 'To-Do List',
    tech: 'HTML,Tailwind css,JavaScript',
    description: 'A simple and clean to-do list application for task management using local storage.',
    github:'https://github.com/mkaif8417/My-To-Do-List',
    preview: 'https://mkaif8417.github.io/My-To-Do-List/'
  },
  {
    name: 'Expence-Tracker',
    tech: 'JavaScript, HTML, CSS',
    description: 'A simple yet effective expense tracker web application that helps users manage their income and expenses. It features real-time balance updates, transaction history, and local storage support to persist data across sessions. Designed with a clean and responsive UI for easy usability.',
    github: 'https://github.com/mkaif8417/EXPENCE-TRACKER',
    preview:'https://mkaif8417.github.io/EXPENCE-TRACKER/'
  }
];

const Projects = () => {
  return (
    <section className="project-section">
      <h2 className="project-title">Some Things I've Built</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <h3>{project.name}</h3>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <p className="project-description">
              <strong>Description:</strong> {project.description}
            </p>
            <a
              className="github-button common-btn"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
               GitHub
            </a>
            {/* <a
              className="preview-btn common-btn"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
               Preview
            </a> */}
            {project.preview && (
  <a
    className="preview-btn common-btn"
    href={project.preview}
    target="_blank"
    rel="noopener noreferrer"
  >
    Preview
  </a>
)}

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
