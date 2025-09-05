import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "Full-stack e-commerce platform built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Socket.io", "Firebase"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Weather forecasting app with interactive charts and maps",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="projects-container">
      <nav className="page-nav">
        <Link to="/" className="back-button">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </nav>
      
      <div className="content">
        <h1 className="page-title">Projects</h1>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} className="project-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href={project.demo} className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
