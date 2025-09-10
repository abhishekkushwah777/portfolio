import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Education.css';

// this is a comment. use of this comment is that you can scroll your code horizonally if your screen is broken and has vertical stripes of broken pixels.

const Education = () => {
  const [activeyear, setactiveyear] = useState(0);
  const year =  [
    {
      cardyear: "2025",
      events: [
        {course:"Completed ITI (NSQF)", institute: "Technocrat pvt.", month: "August", description: ""}
      ]
    },
    {
      cardyear: "2024",
      events: [
        {course: "Started journey in computer science", institute: "SRCEM, Banmore", month: "July", description: "Started an exciting new journey by getting admission into an engineering college to pursue BTech. Stepping into college life full of learning, opportunities, and experiences."},
        {course:"Completed 12th", institute: "Govt. School of Excellence No.1", month: "May", description: "Completed my 12th with a lot of experiences. Aside from studies got my interest in computer science and web development."}
      ]
    },
    {
      cardyear: "2023",
      events: [
        {course:"Completed 11th", institute: "Govt. School of Excellence No.1", month: "May", description: "completed my 11th class with a great percentage (52%). i got distracted from studies and explored every kind of things like sports, technology, artworks, singing etc."}
      ]
    },
    {
      cardyear: "2022",
      events: [
        {course:"Completed 10th", institute: "Govt. School of Excellence No.1", month: "May", description: "completed my 10th class with actually great percentage (85%). Before this i was really good at studies."}
      ]
    }
  ]
  return (
    <div className="other-pages">
      <Link to="/" className="back-btn">Back</Link>
      <div className="other-nav">
        <h2>EDUCATION</h2>
      </div>
      <div className="edu-main">
        <div className="edu-left-container">
          {year.map((yearItem, index) => (
            <h3 
              key={index}
              onClick={() => setactiveyear(index)}
              className={index === activeyear ? "active-year" : ""}
            >{yearItem.cardyear}</h3>
          ))}    
        </div>
        <div className="edu-right-container">
          {year[activeyear].events.map((events, eventIndex) => (
            <div key={eventIndex} className="card">
              <div className="cardyear"><text>{events.month}</text></div>
              <div className="cardtext">
                <h3>{events.course}</h3>
                <h4>From: {events.institute}</h4>
                <p>{events.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Education;
