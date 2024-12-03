// src/pages/JoinOurMovement.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Import useLocation
import HeroSection from '../components/HeroSection'; // Reusing the HeroSection component
import './JoinOurMovement.css'; // Import custom CSS for this page

const JoinOurMovement = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const location = useLocation(); // Get current location

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Implement API call to mailing service here
    // For now, we'll simulate a successful submission
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Extract the id by removing the '#' character
      const id = location.hash.replace('#', '');
      // Find the element with the corresponding id
      const element = document.getElementById(id);
      if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: 'instant' }); // 'instant' is not a valid option, use 'auto'
        // Correct behavior option
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location]);

  const currentUrl = window.location.href;

  return (
    <div className="join-our-movement">
      {/* Hero Section */}
      <HeroSection
        title="Join Our Movement"
        subtitle="Be a part of the change for fair compensation, balanced workloads, and academic excellence."
      />

      {/* Sign Up for Our Newsletter */}
      <Container className="my-5" id="sign-up"> {/* Added id="sign-up" */}
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="section-title text-center mb-4">Sign Up for Our Newsletter</h2>
            <Form onSubmit={handleNewsletterSubmit}>
              <Form.Group controlId="newsletterEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Text className="text-muted">
                  Stay updated with the latest news and events.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Subscribe
              </Button>
              {message && <p className="mt-3 text-success">{message}</p>}
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Share Our Message on Social Media */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="section-title text-center mb-4">Share Our Message on Social Media</h2>
            <div className="social-media-icons text-center">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="social-icon"
              >
                <FaFacebook size={40} color="#3b5998" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Join%20our%20movement%20for%20fair%20compensation%20and%20academic%20excellence%20at%20GMU!`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="social-icon"
              >
                <FaTwitter size={40} color="#00acee" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="social-icon"
              >
                <FaLinkedin size={40} color="#0e76a8" />
              </a>
              <a
                href={`mailto:?subject=Join%20Our%20Movement&body=I%20invite%20you%20to%20join%20our%20movement%20for%20fair%20compensation%20and%20academic%20excellence%20at%20GMU!%20Learn%20more%20here:%20${encodeURIComponent(currentUrl)}`}
                aria-label="Share via Email"
                className="social-icon"
              >
                <FaEnvelope size={40} color="#c71610" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Sign Our Petitions */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="section-title text-center mb-4">Sign Our Petitions</h2>
            <Card className="petition-card text-center">
              <Card.Body>
                <Card.Text className="petition-message">
                  Currently no active petitions. Check back later!
                </Card.Text>
                <Button variant="secondary" disabled>
                  No Active Petitions
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JoinOurMovement;
