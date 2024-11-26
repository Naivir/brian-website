// src/components/CardComponent.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CardComponent.css';

const CardComponent = ({ title, text, links }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {links && links.length > 0 && (
          <div className="card-links">
            {links.map((link, index) => (
              <Button
                key={index}
                variant="primary"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="me-2 mb-2"
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
