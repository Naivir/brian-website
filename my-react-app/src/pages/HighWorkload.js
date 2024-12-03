// src/pages/HighWorkload.js
import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import StatsCard from '../components/StatsCard'; // StatsCard component
import HeroSection from '../components/HeroSection'; // Reusing the HeroSection component
import workloadImage from '../assets/workload.jpg'; // Ensure this image exists
import teachersTime from '../assets/highworkload_teachers_time.png';
import { FaBook, FaUserClock, FaChalkboardTeacher, FaExclamationCircle, FaExclamationTriangle } from 'react-icons/fa';
import './HighWorkload.css';

const HighWorkload = () => {
  const tenureLinks = [
    {
      url: 'https://provost.gmu.edu/faculty/tenure-line-faculty-renewal-promotion-and-tenure',
      label: 'GMU Tenure Requirements',
    },
    {
      url: 'https://www.insidehighered.com/news/2014/04/09/research-shows-professors-work-long-hours-and-spend-much-day-meetings',
      label: 'Research on Faculty Work Hours',
    },
  ];

  const publishQualityLink = {
    url: 'https://www.library.hbs.edu/working-knowledge/publish-or-perish-what-the-research-says-about-productivity-in-academia',
    label: 'Publish or Perish: Research Insights',
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Professors are Overworked at GMU"
        subtitle="Balancing Teaching, Research, and Leadership for Academic Excellence"
        backgroundImage={workloadImage}
        buttonText="Share Your Opinion"
        buttonLink="#cta-section"
      />

      <Container className="page-container">
        {/* Introduction Section */}
        <Row className="align-items-center">
          <Col md={6}>
            <Image
              src={workloadImage}
              alt="High Workload"
              fluid
              rounded
              className="shadow-sm"
              loading="lazy"
            />
            {/* Source Attribution for the First Image */}
            <p className="image-source text-muted mt-2">
              *Graph displaying how many hours teachers work. <br></br>Source: <a href="https://www.insidehighered.com/news/2014/04/09/research-shows-professors-work-long-hours-and-spend-much-day-meetings" target="_blank" rel="noopener noreferrer">Inside Higher Ed Study</a>
            </p>
          </Col>
          <Col md={6}>
            <h2><FaBook /> Overworking of Teachers</h2>
            <p>
              Tenure-track faculty at George Mason University (GMU) are mandated to excel in multiple domains to secure tenure, including teaching, research, and leadership. This multifaceted expectation often leads to an overwhelming workload, hindering the ability to focus on high-quality research.
            </p>
            <p>
              Contract-based professors are expected to teach 12 credit hours a semester at GMU. This leaves no time for research, collaboration, or learning. On the other side, tenure-track professors are expected to publish an exorbitant amount of work, leading to not only an unhealthy work culture at the college, but also a focus on quantity over quality, leading to a degradation in polished work. They are expected to teach 6 credits, service 3, research 3.
            </p>
            <p>
              Notice on the graph on the left that the more focus on administration (chair) actually work less hours than the rest of faculty. Why should faculty be forced to work longer hours and still be given such low time for research and collaboration?
            </p>
          </Col>
        </Row>

        {/* Key Ideas Section */}
        <Row className="mt-5">
          <Col>
            <h3 className="section-title"><FaExclamationTriangle /> Key Issues</h3>
            <Row>
              {/* Professors Overworked */}
              <Col md={4} sm={6} className="mb-4 d-flex">
                <Card className="key-idea-card flex-fill">
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <FaChalkboardTeacher size={40} color="#E63946" />
                    <Card.Title className="mt-3">Professors Overworked</Card.Title>
                    <Card.Text>
                      The pressure to publish frequently compromises the quality of research, fostering a quantity-over-quality culture.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Heavy Teaching Loads for Contract-Based Professors */}
              <Col md={4} sm={6} className="mb-4 d-flex">
                <Card className="key-idea-card flex-fill">
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <FaUserClock size={40} color="#E63946" />
                    <Card.Title className="mt-3">Heavy Teaching Loads for Contract-Based Professors</Card.Title>
                    <Card.Text>
                      Teaching 12 credit hours per semester leaves little to no time for research, limiting professional growth and academic contributions.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Excessive Work Hours */}
              <Col md={4} sm={6} className="mb-4 d-flex">
                <Card className="key-idea-card flex-fill">
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <FaUserClock size={40} color="#E63946" />
                    <Card.Title className="mt-3">Excessive Work Hours</Card.Title>
                    <Card.Text>
                      Teachers work over 60 hours a week, leaving insufficient time to focus on research or improving their craft.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* In-Depth Study Section */}
        <Row className="mt-5">
          <Col>
            <h3 className="section-title">
              <FaExclamationCircle /> Faculty Work Hours Study
            </h3>
            <p>
              A study conducted at Boise State University revealed that faculty members work an average of 61 hours per week, significantly exceeding the standard 40-hour workweek. Of this time, approximately 59% is dedicated to teaching activities for tenure-track professors, including instruction and course administration, while about 17% is devoted to research. At GMU, this is even worse for non-tenure-track teachers, upping the teaching credits from 6 credits to 12!
            </p>
            <p>
              The demanding nature of faculty responsibilities can stifle creativity and hinder the production of meaningful research. Faculty members often feel pressured to prioritize quantity over quality to meet administrative and academic expectations.
            </p>
            {/* Adjusted Study Image with Controlled Size */}
            <div className="study-image-container">
              <Image
                src={teachersTime}
                alt="Faculty Workload Representation"
                className="img-fluid study-image"
                loading="lazy"
              />
              <p className="image-caption text-muted mt-2">
                Source: Boise State University Faculty Work Hours Study <br></br>*This is for tenure-track; remember: non-tenure-track spend 2x as much time teaching
              </p>
            </div>
            <p>
              <a
                href="https://www.insidehighered.com/news/2014/04/09/research-shows-professors-work-long-hours-and-spend-much-day-meetings"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more about the study
              </a>
            </p>
          </Col>
        </Row>

        {/* Combined Supporting Data Section */}
        <Row className="mt-5">
          <Col>
            <h3 className="section-title"><FaExclamationCircle /> Supporting Data</h3>
            <Row>
              <Col md={4} sm={6} className="mb-4 d-flex">
                <StatsCard
                  icon={<FaUserClock />}
                  title="Total Work Hours"
                  value="61 Hours/Week"
                  color="#E63946"
                />
              </Col>
              <Col md={4} sm={6} className="mb-4 d-flex">
                <StatsCard
                  icon={<FaChalkboardTeacher />}
                  title="Teaching / Preparing Time"
                  value="59%-90%"
                  color="#E63946"
                />
              </Col>
              <Col md={4} sm={6} className="mb-4 d-flex">
                <StatsCard
                  icon={<FaExclamationCircle />}
                  title="Research Time (Tenure-Track)"
                  value="17%"
                  color="#E63946"
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <ul>
                  <li>Faculty work hours significantly exceed the standard workweek.</li>
                  <li>Teaching responsibilities consume a large portion of faculty time.</li>
                  <li>Research time is disproportionately low compared to teaching and administrative duties.</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Row className="mt-5" id="cta-section">
          <Col>
            <div className="cta-section text-center p-5 rounded">
              <h2>Advocate for Balanced Workloads</h2>
              <p>
                To foster a more conducive environment for research excellence, it is imperative to reevaluate the workload requirements. Emphasizing quality over quantity will not only enhance the academic contributions of faculty but also enrich the educational experience of students.
              </p>
              <Button variant="warning" size="lg" href="/join-our-movement">
                Share Your Opinion
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HighWorkload;
