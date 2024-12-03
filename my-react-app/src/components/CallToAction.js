// src/components/CallToAction.js
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './CallToAction.css'; // Create this CSS file for specific styles

const CallToAction = ({ title, text, buttonText, buttonLink }) => {
  return (
    <Row className="mt-5" id="cta-section">
      <Col>
        <div className="cta-section text-center p-5 rounded">
          <h2>{title}</h2>
          <p>{text}</p>
          <Button variant="light" size="lg" href={buttonLink}>
            {buttonText}
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default CallToAction;
