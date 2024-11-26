// src/components/Testimonial.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Testimonial.css';

const Testimonial = ({ quote, author, position }) => {
  return (
    <Card className="testimonial-card mb-4">
      <Card.Body>
        <FaQuoteLeft className="quote-icon left" />
        <Card.Text className="testimonial-text">
          {quote}
        </Card.Text>
        <FaQuoteRight className="quote-icon right" />
        <Card.Title className="testimonial-author">{author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Testimonial;
