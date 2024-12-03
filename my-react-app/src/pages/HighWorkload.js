// src/pages/HighWorkload.js
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import StatsCard from '../components/StatsCard'; // Newly added StatsCard component
import HeroSection from '../components/HeroSection'; // Reusing the HeroSection component
import workloadImage from '../assets/workload.jpg'; // Ensure this image exists
import { FaBook, FaUserClock, FaChalkboardTeacher, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';
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

  const questions = [
    'How many hours per week is normal?',
    'What are most of those hours for?',
    'What do you wish you had more time for?',
    'How would the college go about doing that?',
  ];

  return (
    <>
      {/* HeroSection Section */}
      <HeroSection
        title="Managing High Workloads at GMU"
        subtitle="Balancing Teaching, Research, and Leadership for Academic Excellence"
        backgroundImage={workloadImage}
        buttonText="Share Your Opinion"
        buttonLink="#cta-section"
      />

      <Container className="page-container">
        {/* Introduction Section */}
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={workloadImage} alt="High Workload" fluid rounded className="shadow-sm" loading="lazy" />
          </Col>
          <Col md={6}>
            <h2><FaUserClock /> The Challenge of High Workloads</h2>
            <h3><FaBook /> Goal: Quality Over Quantity in Research Publications</h3>
            <p>
              Faculty at George Mason University (GMU) are mandated to excel in multiple domains to secure tenure, including teaching, research, and leadership. This multifaceted expectation often leads to an overwhelming workload, hindering the ability to focus on high-quality research.
            </p>
            <p>
              For example, contract-based professors are expected to teach 12 credit hours a semester at GMU. This leaves no time for research, collaboration, or learning. On the other side, tenure-track professors are expected to publish an exorbitant amount of work, leading to an unhealthy work culture at the college.
            </p>
            <p>
              What's even more absurd is that if you are not hired as a tenure-track employee, there is no possibility for you to get tenure. Additionally, there is very little upward mobility for people seeking promotions or pay raises as faculty.
            </p>
            <p>
              A study conducted at Boise State University revealed that faculty members spend approximately 61 hours per week on their duties, surpassing the standard 40-hour workweek. Of these, 40% are dedicated to teaching, while a mere 3% is allocated to research. At GMU, the tenure requirements impose teaching responsibilities of at least 12 credit hours per semester for full-time faculty and 6 credit hours for tenure-track faculty, supplemented by 3 credit hours each in research and service.
            </p>
            <p>
              These stringent requirements stifle creativity and the ability to produce meaningful research, as faculty are compelled to prioritize quantity over quality to meet administrative and academic demands.
            </p>
          </Col>
        </Row>

        {/* Impact on Research Quality Section */}
        <Row className="mt-5">
          <Col>
            <CardComponent
              title="Impact on Research Quality"
              text="The necessity to meet high workload demands results in rushed research endeavors, limiting the depth and innovation of publications. Faculty members are unable to dedicate sufficient time to explore complex research questions, leading to superficial studies that do not contribute significantly to their fields."
              links={[publishQualityLink]}
            />
          </Col>
        </Row>

        {/* Supporting Data Section */}
        <Row className="mt-5">
          <Col>
            <h3><FaBook /> Supporting Data</h3>
            <ul>
              <li>Faculty work hours significantly exceed the standard workweek.</li>
              <li>Teaching responsibilities consume a large portion of faculty time.</li>
              <li>Research time is disproportionately low compared to teaching and administrative duties.</li>
            </ul>
          </Col>
        </Row>

        {/* Supporting Data Section */}
        <Row className="mt-5">
          <Col>
            <h3 className="section-title"><FaBook /> Supporting Data</h3>
            <Row>
              <Col md={4} sm={6} className="mb-4">
                <StatsCard
                  icon={<FaUserClock />}
                  title="Total Work Hours"
                  value="61 Hours/Week"
                />
              </Col>
              <Col md={4} sm={6} className="mb-4">
                <StatsCard
                  icon={<FaChalkboardTeacher />}
                  title="Teaching Time"
                  value="40%"
                />
              </Col>
              <Col md={4} sm={6} className="mb-4">
                <StatsCard
                  icon={<FaChartLine />}
                  title="Research Time"
                  value="3%"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Row className="mt-5" id="cta-section">
          <Col>
            <div className="cta-section text-center p-5 rounded" style={{ backgroundColor: '#0f4c81', color: '#fff' }}>
              <h2>Advocate for Balanced Workloads</h2>
              <p>
                To foster a more conducive environment for research excellence, it is imperative to reevaluate the workload requirements. Emphasizing quality over quantity will not only enhance the academic contributions of faculty but also enrich the educational experience of students.
              </p>
              <Button variant="light" size="lg" href="https://www.yoursupportlink.com">
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
