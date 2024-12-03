// src/components/CardComponent.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CardComponent.css'; // Ensure this CSS file exists for Card-specific styles

const CardComponent = ({ title, text, links }) => {
  return (
    <Card className="custom-card shadow">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {links && links.map((link, index) => (
          <Button key={index} variant="primary" href={link.url} className="mr-2">
            {link.label}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
