// HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './HeroSection.css';
import { Button } from 'react-bootstrap'; // Import Button if using React Bootstrap

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {/* Replace <a> with React Router's Link */}
        <Button
          as={Link}
          to="/join-our-movement"
          className="hero-button"
          variant="primary" // Adjust variant as needed
        >
          Join the Movement
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
