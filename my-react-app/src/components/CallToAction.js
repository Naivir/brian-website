// src/components/CallToAction.js
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import './CallToAction.css'; // Ensure this CSS file exists

const CallToAction = ({ title, text, buttonText, buttonLink, isExternal }) => {
  return (
    <Row className="mt-5">
      <Col>
        <div className="cta-section text-center p-5 rounded">
          <h2>{title}</h2>
          <p>{text}</p>
          {isExternal ? (
            <Button variant="light" size="lg" href={buttonLink} target="_blank" rel="noopener noreferrer">
              {buttonText}
            </Button>
          ) : (
            <Link to={buttonLink}>
              <Button variant="light" size="lg">
                {buttonText}
              </Button>
            </Link>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default CallToAction;
