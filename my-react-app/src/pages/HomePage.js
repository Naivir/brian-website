// src/pages/HomePage.js
import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { FaLightbulb, FaHandsHelping, FaBullhorn } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import './HomePage.css';
import posterImage from '../assets/poster.jpg'; // Ensure this image exists
import advocacyImage1 from '../assets/veanea.jpg'; // Placeholder images
import advocacyImage2 from '../assets/ateva.jpeg';
import advocacyImage3 from '../assets/aaup.png';
import HeroSection from '../components/HeroSection'; // New Hero component

const HomePage = () => {
  const coreIssues = [
    {
      icon: <FaHandsHelping size={30} color="#ffffff" />,
      title: 'High Faculty Workloads',
      description: 'Excessive teaching put onto faculty as both tenure-track and non-tenture track limit research and personal growth.',
      link: '/high-work-load',
    },
    {
        icon: <FaLightbulb size={30} color="#ffffff" />, // Adjusted size for better fit
        title: 'Faculty Budget Issues',
        description: 'Insufficient budget allocations hinder academic excellence and resource availability. This puts students education at risk. Faculty need more say in the budget.',
        link: '/budget',
      },
    {
      icon: <FaBullhorn size={30} color="#ffffff" />,
      title: 'Faculty Classism',
      description: 'There is little mobility in faculty jobs. Adjunct and part time professors face low pay, job insecurity, and lack of benefits. Additionally, all non-tenure-track professors lack a voice in academic administration decisions and policies.',
      link: '/adjunct-issues',
    },
  ];

  const advocacyGroups = [
    {
        image: advocacyImage3,
        name: 'Virginia Association of Colleges and Teacher Educators',
        description: 'The New Deal for Higher Education is a campaign initiated by the American Association of University Professors (AAUP) and the American Federation of Teachers (AFT) to advocate for substantial federal investment in higher education, aiming to reestablish it as a public good and address issues such as accessibility, labor practices, inequities, and academic freedom.',
        link: 'https://www.ateva.org/advocacy-and-polic',
    },
    {
        image: advocacyImage1,
        name: 'AAUP New Deal',
        description: 'The Virginia Education Association (VEA) is a union dedicated to advancing quality instruction, securing adequate funding, and ensuring excellent working conditions for Virginia public educators.',
        link: 'https://www.aaup.org/article/new-deal-higher-education',
      },

    {
      image: advocacyImage2,
      name: 'Virginia Education Association',
      description: 'The Virginia Association of Colleges and Teacher Educators (VACTE) is an inclusive organization that promotes the professional development of pre-service and in-service teachers, as well as school/university partnerships to enhance PreK-12 student learning and well-being. ',
      link: 'https://www.veanea.org/about/who-we-are/',
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
        <p>Images belong to respective websites</p>
      </Container>

      {/* Call to Action Section */}
      <div className="homepage-cta-section text-center py-5" id="cta-section">
  <Container>
    <h2 className="cta-title">Join the Movement for Positive Change</h2>
    <p className="cta-text">
      Stand with your fellow faculty members to advocate for fair compensation, manageable workloads, and the resources needed to excel in academia. Together, we can create a supportive and thriving academic environment at GMU.
    </p>
    {/* Updated Button to use React Router's Link */}
    <Button
      as={Link}
      to="/join-our-movement"
      variant="warning"
      size="lg"
    >
      Get Involved
    </Button>
  </Container>
</div>
    </div>
  );
};

export default HomePage;
