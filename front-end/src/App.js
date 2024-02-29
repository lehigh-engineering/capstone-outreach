import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
// import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
