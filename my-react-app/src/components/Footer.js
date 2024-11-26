// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // If using React Bootstrap
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-primary text-white">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Faculty Advocates. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="https://www.gmu.edu/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              GMU Website
            </a>
            <a href="mailto:facultyadvocates@gmu.edu" className="text-white">
              Contact Us
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
