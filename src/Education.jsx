import React from 'react';
import { Link } from 'react-router-dom';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <nav className="page-nav">
        <Link to="/" className="back-button">
          <svg width="12" height="24"><path d="m7.824 13 5.602 5.602L12 20l-8-8 8-8 1.426 1.398L7.824 11H8"/></svg>
          Back
        </Link>
      </nav>
    </div>
  );
};

export default Education;
