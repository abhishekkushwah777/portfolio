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
    <>
    </>
  );
};

export default Projects;
