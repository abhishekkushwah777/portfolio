import React from 'react';
import { Link } from 'react-router-dom';
import './Education.css';

const Education = () => {
  return (
    <div className="education-page">
      <Link to="/" className="back-btn">Back</Link>
      <div className="edu-nav">
        <h2>EDUCATION</h2>
      </div>
      <div className="edu-main">
        <div className="edu-left-container">
          <h3>2025</h3>
          <h3>2024</h3>
          <h3>2023</h3>
          <h3>2022</h3>
        </div>
        <div className="edu-right-container">
          <div className="testdiv"></div>
          <div className="testdiv"></div>
          <div className="testdiv"></div>
          <div className="testdiv"></div>
          <div className="testdiv"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Education;
