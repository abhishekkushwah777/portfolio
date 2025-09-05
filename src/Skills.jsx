import React from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "Figma", level: 80 }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <nav className="page-nav">
        <Link to="/" className="back-button">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </nav>
      
      <div className="content">
        <h1 className="page-title">Skills</h1>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
