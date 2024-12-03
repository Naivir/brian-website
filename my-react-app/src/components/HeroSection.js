// HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href="#join" className="hero-button">Join the Movement</a>
      </div>
    </section>
  );
};

export default HeroSection;
