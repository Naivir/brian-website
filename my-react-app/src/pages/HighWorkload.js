// src/pages/HighWorkload.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import workloadImage from '../assets/workload.jpg'; // Ensure this image exists
import { FaBook, FaUserClock } from 'react-icons/fa';
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
    <Container className="page-container my-5">
      <Row>
        <Col md={6}>
          <Image src={workloadImage} alt="High Workload" fluid rounded loading="lazy" />
        </Col>
        <Col md={6}>
          <h1><FaUserClock /> High Workload Quantity</h1>
          <h3><FaBook /> Goal: Quality Over Quantity in Research Publications</h3>
          <p>
            Faculty at George Mason University (GMU) are mandated to excel in multiple domains to secure tenure, including teaching, research, and leadership. This multifaceted expectation often leads to an overwhelming workload, hindering the ability to focus on high-quality research.
          </p>
          <p>
            A study conducted at Boise State University revealed that faculty members spend approximately 61 hours per week on their duties, surpassing the standard 40-hour workweek. Of these, 40% are dedicated to teaching, while a mere 3% is allocated to research. At GMU, the tenure requirements impose teaching responsibilities of at least 12 credit hours per semester for full-time faculty and 6 credit hours for tenure-track faculty, supplemented by 3 credit hours each in research and service.
          </p>
          <p>
            These stringent requirements stifle creativity and the ability to produce meaningful research, as faculty are compelled to prioritize quantity over quality to meet administrative and academic demands.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <CardComponent
            title="Impact on Research Quality"
            text="The necessity to meet high workload demands results in rushed research endeavors, limiting the depth and innovation of publications. Faculty members are unable to dedicate sufficient time to explore complex research questions, leading to superficial studies that do not contribute significantly to their fields."
            links={[publishQualityLink]}
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <CardComponent
            title="Call to Action"
            text="To foster a more conducive environment for research excellence, it is imperative to reevaluate the tenure requirements. Emphasizing quality over quantity will not only enhance the academic contributions of faculty but also enrich the educational experience of students."
            links={[
              {
                url: '#',
                label: 'Share Your Opinion',
              },
            ]}
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Supporting Data</h3>
          <ul>
            <li>Faculty work hours significantly exceed the standard workweek.</li>
            <li>Teaching responsibilities consume a large portion of faculty time.</li>
            <li>Research time is disproportionately low compared to teaching and administrative duties.</li>
          </ul>
        </Col>
      </Row>

      {/* <Row className="mt-4">
        <Col>
          <h3>Frequently Asked Questions</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </Col>
      </Row> */}
    </Container>
  );
};

export default HighWorkload;
