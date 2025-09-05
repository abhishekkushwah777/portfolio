import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import './App.css';
import CustomCursor from './Cursor';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
