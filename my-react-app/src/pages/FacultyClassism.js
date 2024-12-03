// src/pages/FacultyClassism.js
import React from 'react';
import { Container, Row, Col, Image, Table, Card } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import HeroSection from '../components/HeroSection'; // Hero component
import CallToAction from '../components/CallToAction'; // Updated CTA component
import adjunctImage from '../assets/adjunct.jpg'; // Ensure this image exists
import { FaUserTie, FaExclamationTriangle } from 'react-icons/fa'; // Updated icon
import './FacultyClassism.css';

const FacultyClassism = () => {
  const adjunctLinks = [
    {
      url: 'https://www.indeed.com/career-advice/pay-salary/adjunct-professor-salary',
      label: 'Adjunct Professor Salary Insights',
    },
    {
      url: 'https://www.collegefactual.com/colleges/george-mason-university/academic-life/faculty-composition/?utm_source=chatgpt.com',
      label: 'GMU Faculty Composition',
    },
    {
      url: 'https://www.indeed.com/cmp/George-Mason-University/salaries/Adjunct-Professor?utm_source=chatgpt.com',
      label: 'GMU Adjunct Salaries on Indeed',
    },
  ];

  const facultyComposition = {
    fullTime: {
      count: 1399,
      percentage: 52,
      averageSalary: '$120,000',
      breakdown: {
        Professors: '$205,685',
        AssociateProfessors: '$140,911',
        AssistantProfessors: '$102,277',
        Instructors: '$90,412',
      },
    },
    partTime: {
      count: 1294,
      percentage: 48,
      averageSalary: '$22,000',
    },
  };

  const percentageTenureData = [
    {
      category: 'Tenured Faculty',
      total: 692,
    },
    {
      category: 'On Tenure Track',
      total: 228,
    },
    {
      category: 'Not on Tenure Track',
      total: 1773,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Faculty Classism at GMU"
        subtitle="Addressing Inequities and Advocating for Fair Practices"
        backgroundImage={adjunctImage}
        buttonText="Support Faculty Equity"
        buttonLink="#cta-section"
        // Adding source attribution for the hero image
        imageSource="*Source: <a href='https://fiscal.gmu.edu/wp-content/uploads/2023-2024-Executive-Summary-3.pdf' target='_blank' rel='noopener noreferrer'>Fiscal Year Executive Summary</a>"
      />

      <Container className="page-container">
        {/* Introduction Section */}
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={adjunctImage} alt="Faculty Classism" fluid rounded className="shadow-sm" loading="lazy" />
            {/* Source Attribution for the Introduction Image */}
            <p className="image-source text-muted mt-2">
              *Source: <a href="https://ccbit.business.gmu.edu/wp-content/uploads/2022/03/Faculty-Overload-and-Adjunct-Pay-Matrix-2022.02.02.pdf" target="_blank" rel="noopener noreferrer">GMU Pay Matrix</a>
            </p>
          </Col>
          <Col md={6} className="faculty-classism-intro">
            <h2><FaUserTie /> Faculty Classism at GMU</h2>
            <p>
              At George Mason University (GMU), classism manifests in the stark disparities between tenure-track and non-tenure-track faculty. Only tenure-track faculty receive service credits and have opportunities for research, while contract-based faculty are limited to teaching responsibilities. Moreover, contract renewals are not guaranteed, leaving contract-based faculty in a precarious employment situation.
            </p>
            <p>
              Adjunct and part-time professors face even greater challenges. They receive no service credits and lack any meaningful input in how the college is run. Additionally, these faculty members do not receive health benefits, and their contracts can be terminated at any time without notice. This systemic undervaluation of adjunct and part-time faculty undermines the quality of education and contributes to high turnover rates.
            </p>
            <p>
              Shockingly, nearly half (48%) of GMU's employees are part-time or adjunct faculty, yet they have no say in institutional governance. The lack of upward mobility and <a href="https://chss.gmu.edu/faculty/renewal-promotion-and-tenure" target="_blank" rel="noopener noreferrer">clear pathways to tenure</a> for non-tenure-track faculty further entrenches these inequities, creating rigid classes that stifles professional growth and perpetuates classism within the academic community.
            </p>
            <p>
              Tenure at GMU is only attainable if one is hired as a tenure-track faculty member, leaving contract-based and adjunct faculty with little hope for job security or career advancement. This environment fosters exploitation and hampers the ability of educators to contribute meaningfully to the institution's mission.
            </p>
          </Col>
        </Row>

        {/* Employment Types Section */}
        <Row className="mt-5 employment-types-section">
          <Col>
            <h3>Employment Types</h3>
            <Row className="mt-3">
              {/* Tenure-Track and Tenure Card */}
              <Col md={4} sm={12} className="mb-4">
                <Card className="employment-card h-100">
                  <Card.Body>
                    <Card.Title>Tenure-Track and Tenure</Card.Title>
                    <ul>
                      <li>6 credits in teaching, 3 in research, 3 in service</li>
                      <li>
                        For more information on strict requirements for tenure-track, look at{' '}
                        <a href="/high-workload" target="_blank" rel="noopener noreferrer">
                          High Workload Page
                        </a>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              {/* Contract-based Card */}
              <Col md={4} sm={12} className="mb-4">
                <Card className="employment-card h-100">
                  <Card.Body>
                    <Card.Title>Contract-based</Card.Title>
                    <ul>
                      <li>Job insecurity (contracts can be non-renewed at any time)</li>
                      <li>12 teaching credits (no time for research, no involvement in administration aspects like budget, curriculum changes, etc.)</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              {/* Part-time and Adjunct Card */}
              <Col md={4} sm={12} className="mb-4">
                <Card className="employment-card h-100">
                  <Card.Body>
                    <Card.Title>Part-time and Adjunct</Card.Title>
                    <ul>
                      <li>No job benefits (healthcare, insurance)</li>
                      <li>Contracts can be terminated at any time without notice</li>
                      <li>No say in administration (how the college is run)</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <p className="conclusion-note">
                  The vast majority of professors are not tenure-track, and yet they get no say in how the college is run!
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Percentage Tenure Section */}
        <Row className="mt-5 percentage-tenure-section">
          <Col>
            <h3>Percentage Tenure</h3>
            <Table striped bordered hover responsive className="modern-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {percentageTenureData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.category}</td>
                    <td>{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p className="source-note">
              *Source: <a href="https://www.collegefactual.com/colleges/george-mason-university/academic-life/faculty-composition/" target="_blank" rel="noopener noreferrer">College Factual - Faculty Composition</a>
            </p>
          </Col>
        </Row>

        {/* Faculty Composition Section */}
        <Row className="mt-5">
          <Col>
            <h3>Faculty Composition at GMU</h3>
            <Table striped bordered hover responsive className="modern-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Count</th>
                  <th>Percentage</th>
                  <th>Average Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full-Time Faculty</td>
                  <td>{facultyComposition.fullTime.count}</td>
                  <td>{facultyComposition.fullTime.percentage}%</td>
                  <td>{facultyComposition.fullTime.averageSalary}</td>
                </tr>
                <tr>
                  <td>Part-Time Faculty</td>
                  <td>{facultyComposition.partTime.count}</td>
                  <td>{facultyComposition.partTime.percentage}%</td>
                  <td>{facultyComposition.partTime.averageSalary}</td>
                </tr>
              </tbody>
            </Table>
            <p className="source-note">
              *Source: <a href="https://www.univstats.com/salary/george-mason-university/faculty/" target="_blank" rel="noopener noreferrer">University Statistics - Faculty Salaries</a>
            </p>
          </Col>
        </Row>

        {/* By Rank Section */}
        <Row className="mt-4">
          <Col>
            <h3>By Rank:</h3>
            <Table striped bordered hover responsive className="modern-table">
              <thead>
                <tr>
                  <th>Faculty Job</th>
                  <th>Total</th>
                  <th>Men</th>
                  <th>Women</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Professors</td>
                  <td>$205,685</td>
                  <td>$232,440</td>
                  <td>$182,274</td>
                </tr>
                <tr>
                  <td>Associate Professors</td>
                  <td>$140,911</td>
                  <td>$149,189</td>
                  <td>$133,184</td>
                </tr>
                <tr>
                  <td>Assistant Professors</td>
                  <td>$102,277</td>
                  <td>$108,063</td>
                  <td>$100,281</td>
                </tr>
                <tr>
                  <td>Instructors</td>
                  <td>$90,412</td>
                  <td>$88,088</td>
                  <td>$91,283</td>
                </tr>
                <tr>
                  <td>All Faculty</td>
                  <td>$151,769</td>
                  <td>$174,355</td>
                  <td>$136,027</td>
                </tr>
              </tbody>
            </Table>
            <p className="source-note">
              *Source: <a href="https://www.univstats.com/salary/george-mason-university/faculty/" target="_blank" rel="noopener noreferrer">University Statistics - Faculty Salaries</a>
            </p>
          </Col>
        </Row>

        {/* Gender Disparity in Salaries Section */}
        <Row className="mt-5 gender-disparity-section">
          <Col>
            <h3>Gender Disparity in Salaries</h3>
            <CardComponent
              title="Gender Disparity in Salaries"
              text="There is a significant gender disparity in faculty salaries at GMU. Men at the professor 12-month contract level are paid approximately $50,000 more than their female counterparts. This discrepancy highlights the need for transparent and equitable salary structures within the institution."
              links={[
                {
                  url: 'https://www.univstats.com/salary/george-mason-university/faculty/',
                  label: 'University Statistics - Faculty Salaries',
                },
              ]}
            />
            {/* Enhanced Emphasis */}
            <div className="gender-emphasis mt-3 d-flex align-items-center">
              <FaExclamationTriangle size={40} className="emphasis-icon text-danger me-3" />
              <p className="emphasis-text mb-0">
                Addressing this inequality is crucial for fostering an inclusive and fair academic environment.
              </p>
            </div>
          </Col>
        </Row>

        {/* Call to Action Section */}
        <CallToAction
          title="Advocate for Balanced Workloads"
          text="To foster a more conducive environment for research excellence, it is imperative to reevaluate the workload requirements. Emphasizing quality over quantity will not only enhance the academic contributions of faculty but also enrich the educational experience of students."
          buttonText="Share Your Opinion"
          buttonLink="/join-our-movement" // Internal route
          isExternal={false} // Indicates internal routing
        />

        {/* Source Link at Bottom */}
      </Container>
    </>
  );
};

export default FacultyClassism;
