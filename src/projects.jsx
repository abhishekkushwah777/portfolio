import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import './Education.css';

// this is a comment. use of this comment is that you can scroll your code horizonally if your screen is broken and has vertical stripes of broken pixels.

const Projects = () => {
  // const projects = [
  //   {
  //     title: "E-commerce Website",
  //     description: "Full-stack e-commerce platform built with React and Node.js",
  //     technologies: ["React", "Node.js", "MongoDB", "Express"],
  //     github: "#",
  //     demo: "#"
  //   },
  //   {
  //     title: "Task Management App",
  //     description: "A collaborative task management application with real-time updates",
  //     technologies: ["React", "Socket.io", "Firebase"],
  //     github: "#",
  //     demo: "#"
  //   },
  //   {
  //     title: "Weather Dashboard",
  //     description: "Weather forecasting app with interactive charts and maps",
  //     technologies: ["JavaScript", "Chart.js", "Weather API"],
  //     github: "#",
  //     demo: "#"
  //   }
  // ];

  return (
    <div className="other-pages">
      <Link to="/" className="back-btn">Back</Link>
      <div className="other-nav">
        <h2>PROJECTS</h2>
      </div>
      <div className="projects-container">
        <h1>Unfortunately, currently i have nothimg to showcase as a project. but I’m working on something exciting. Thanks so much for your patience and support—just keep an eye out, and I’ll have something ready to show you soon!</h1>
      </div>
    </div>
  );
};

export default Projects;
