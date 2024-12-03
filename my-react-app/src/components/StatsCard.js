// src/components/StatsCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import './StatsCard.css'; // Create this CSS file for styling

const StatsCard = ({ icon, title, value }) => {
  return (
    <Card className="stats-card text-center shadow-sm">
      <Card.Body>
        <div className="stats-icon mb-3">{icon}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="stats-value">{value}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;
