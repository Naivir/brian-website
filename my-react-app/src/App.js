// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HighWorkload from './pages/HighWorkload';
import FacultyBudget from './pages/FacultyBudget';
import AdjunctIssues from './pages/AdjunctIssues';
import './App.css'; // Optional: For global styling

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HighWorkload />} />
            <Route path="/budget" element={<FacultyBudget />} />
            <Route path="/adjunct-issues" element={<AdjunctIssues />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
