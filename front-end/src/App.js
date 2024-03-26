import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
import NotFoundPage from './components/NotFoundPage';
import CipherWheel from './components/CipherWheel/CipherWheel';

import CryptoModule from './modules/crypto/CryptoModule';
import InjectionModule from './modules/injection/InjectionModule';
import SkeletonModule from './modules/skeleton/SkeletonModule';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/cryptography" element={<CryptoModule />} />
          <Route path="/cybersecurity" element={<InjectionModule />} />
          <Route path="/skeleton" element={<SkeletonModule />} />
          <Route path="/cipherwheel" element={<CipherWheel />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
