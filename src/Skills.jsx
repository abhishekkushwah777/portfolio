import React from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';
import './Education.css';

// this is a comment. use of this comment is that you can scroll your code horizonally if your screen is broken and has vertical stripes of broken pixels.

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95, src: "src/assets/icons/react.svg", overlay: "src/assets/icons/transparent.svg"},
        { name: "HTML/CSS", level: 100, src: "src/assets/icons/html.svg", overlay: "src/assets/icons/transparent.svg" },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85, src: "src/assets/icons/node.svg", overlay: "src/assets/icons/transparent.svg" },
        { name: "Express.js", level: 80, src: "src/assets/icons/express.svg", overlay: "src/assets/icons/transparent.svg" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: 80, src: "src/assets/icons/mongo.svg", overlay: "src/assets/icons/transparent.svg" },
        { name: "MySQL", level: 60, src: "src/assets/icons/sql.svg", overlay: "src/assets/icons/transparent.svg" },
      ]
    },
    {
      category: "programming languages",
      skills: [
        { name: "C++", level: 70, src: "src/assets/icons/C++.svg", overlay: "src/assets/icons/transparent.svg" },
        { name: "Javascript", level: 90, src: "src/assets/icons/javascript-plain.svg", overlay: "src/assets/icons/transparent.svg" },
        { name: "python", level: 70, src: "src/assets/icons/python.svg", overlay: "src/assets/icons/transparent.svg"}
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90, src: "src/assets/icons/git.svg", overlay: "src/assets/icons/transparent.svg" },,
        { name: "Github", level: 100, src: "src/assets/icons/github.svg", overlay: "src/assets/icons/transparent.svg" },,

      ]
    },
    {
      category: "Operating Systems",
      skills: [
        { name: "windows", level: 100, src: "src/assets/icons/win.svg", overlay: "src/assets/icons/transparent.svg" },
        { name: "Arch-linux", level: 60, src: "src/assets/icons/arch.svg", overlay: "src/assets/icons/transparent.svg" },
        { name: "Kali-linux", level: 80, src: "src/assets/icons/kali.svg", overlay: "src/assets/icons/transparent.svg" },
        { name: "Debian", level: 80, src: "src/assets/icons/debian.svg", overlay: "src/assets/icons/transparent.svg" }
      ]
    }
  ];

  return (
    <div className="other-pages">
      <Link to="/" className="back-btn">Back</Link>
      <div className="other-nav">
        <h2>SKILLS</h2>
      </div>
      <div className="skills-main">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills">
              {category.skills.map((skill, idx)=>(
                <div key={idx} className="skill">
                  <div className='skill-left'>
                    <img src={skill.overlay} style={{ WebkitMaskImage: `url(${skill.src})`, maskImage: `url(${skill.src})` }}/>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                    <div className="progress-bar">
                      <div className="progress" style={{width:`${skill.level}%`}}></div>
                    </div>
                    <span style={{color:'black', fontSize:'16px'}}>{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default Skills;
