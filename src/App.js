// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/students" element={<Students />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
