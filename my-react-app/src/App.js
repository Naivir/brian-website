// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HighWorkload from './pages/HighWorkload';
import FacultyBudget from './pages/FacultyBudget';
import FacultyClassism from './pages/FacultyClassism';
import HomePage from './pages/HomePage';
import JoinOurMovement from './pages/JoinOurMovement';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import './App.css'; // Optional: For global styling

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}

      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/index.html" element={<HomePage />} />
            <Route path="/high-work-load" element={<HighWorkload />} />
            <Route path="/budget" element={<FacultyBudget />} />
            <Route path="/adjunct-issues" element={<FacultyClassism />} />
            <Route path="/join-our-movement" element={<JoinOurMovement />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
