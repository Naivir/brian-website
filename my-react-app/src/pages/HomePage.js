// src/pages/HomePage.js
import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { FaLightbulb, FaHandsHelping, FaBullhorn } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import './HomePage.css';
import posterImage from '../assets/poster.jpg'; // Ensure this image exists
import advocacyImage1 from '../assets/poster.jpg'; // Placeholder images
import advocacyImage2 from '../assets/poster.jpg';
import advocacyImage3 from '../assets/poster.jpg';
import HeroSection from '../components/HeroSection'; // New Hero component

const HomePage = () => {
  const coreIssues = [
    {
      icon: <FaLightbulb size={30} color="#ffffff" />, // Adjusted size for better fit
      title: 'Underfunding',
      description: 'Insufficient budget allocations hinder academic excellence and resource availability.',
      link: '/budget',
    },
    {
      icon: <FaHandsHelping size={30} color="#ffffff" />,
      title: 'High Workloads',
      description: 'Excessive teaching and administrative duties limit research and personal growth.',
      link: '/high-work-load',
    },
    {
      icon: <FaBullhorn size={30} color="#ffffff" />,
      title: 'Adjunct Issues',
      description: 'Adjunct professors face low pay, job insecurity, and lack of benefits. Additionally, they often lack a voice in academic decisions and policies.',
      link: '/adjunct-issues',
    },
  ];

  const advocacyGroups = [
    {
      image: advocacyImage1,
      name: 'Placeholder',
      description: 'A collective voice advocating for faculty rights and better working conditions.',
      link: 'https://facultyunited.example.com',
    },
    {
      image: advocacyImage2,
      name: 'Placeholder',
      description: 'Promoting academic freedom and equitable treatment across all departments.',
      link: 'https://academicalliance.example.com',
    },
    {
      image: advocacyImage3,
      name: 'Placeholder',
      description: 'Supporting faculty in their research endeavors and combating underfunding.',
      link: 'https://researchadvocates.example.com',
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <HeroSection
        title="Empowering Faculty at GMU"
        subtitle="Advocating for Fair Compensation, Balanced Workloads, and Academic Excellence"
      />

      {/* Core Issues Section */}
      <Container className="core-issues-section my-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="section-title">Core Issues</h2>
            <Row className="mt-4">
              {coreIssues.map((issue, index) => (
                <Col md={12} key={index} className="mb-4">
                  <Link to={issue.link} className="issue-card-link">
                    <Card className="issue-card d-flex align-items-center p-3">
                      <div className="issue-icon">
                        {issue.icon}
                      </div>
                      <div>
                        <Card.Title>{issue.title}</Card.Title>
                        <Card.Text>{issue.description}</Card.Text>
                      </div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
            {/* Additional Content to Enhance Core Issues Section */}
            <Row className="mt-4">
              <Col>
                <p>
                  Addressing these core issues is essential for creating an environment where faculty can thrive. By tackling underfunding, reducing workloads, and eliminating gender disparities, we aim to enhance both faculty satisfaction and student learning outcomes.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="text-center">
            <Image src={posterImage} alt="Core Issues Poster" fluid rounded className="shadow poster-image" />
          </Col>
        </Row>
      </Container>

      {/* Reach Out to Faculty Advocacy Groups Section */}
      <Container className="advocacy-section my-5">
        <h2 className="section-title text-center">Reach Out to Faculty Advocacy Groups</h2>
        <Row className="mt-4">
          {advocacyGroups.map((group, index) => (
            <Col md={4} key={index} className="mb-4">
              <a href={group.link} target="_blank" rel="noopener noreferrer" className="advocacy-card-link" aria-label={`Visit ${group.name}`}>
                <Card className="advocacy-card h-100">
                  <Card.Img variant="top" src={group.image} alt={group.name} />
                  <Card.Body>
                    <Card.Title>{group.name}</Card.Title>
                    <Card.Text>{group.description}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="homepage-cta-section text-center py-5" id="cta-section">
        <Container>
          <h2 className="cta-title">Join the Movement for Positive Change</h2>
          <p className="cta-text">
            Stand with your fellow faculty members to advocate for fair compensation, manageable workloads, and the resources needed to excel in academia. Together, we can create a supportive and thriving academic environment at GMU.
          </p>
          <Button variant="warning" size="lg" href="https://www.yoursupportlink.com">
            Get Involved
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
