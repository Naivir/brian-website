// src/pages/AdjunctIssues.js
import React from 'react';
import { Container, Row, Col, Image, Table, Button } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import HeroSection from '../components/HeroSection'; // New Hero component
import adjunctImage from '../assets/adjunct.jpg'; // Ensure this image exists
import { FaUserTie, FaBalanceScale } from 'react-icons/fa';
import './AdjunctIssues.css';

const AdjunctIssues = () => {
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
      averageSalary: '$116,607',
      breakdown: {
        Professors: '$157,322 (men earn ~$50k more than women)',
        AssociateProfessors: '$109,334',
        AssistantProfessors: '$97,036',
        Instructors: '$76,483',
      },
    },
    partTime: {
      count: 1294,
      percentage: 48,
      averageSalary: '$21,979',
    },
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="The Mismanagement of Adjunct Professors at GMU"
        subtitle="Understanding the Challenges and Advocating for Change"
        // backgroundImage={adjunctImage}
        // buttonText="Support Fair Pay"
        // buttonLink="#cta-section"
      />

      <Container className="page-container">
        {/* Introduction Section */}
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={adjunctImage} alt="Adjunct Professors" fluid rounded className="shadow-sm" loading="lazy" />
          </Col>
          <Col md={6}>
            <h2><FaUserTie /> The Plight of Adjunct Professors</h2>
            <p>
              At GMU, adjunct faculty constitute a significant portion of the workforce, with part-time employees making up 48% of the total faculty. These professionals play a crucial role in bridging the gap between academic theories and industry practices, ensuring that students receive relevant and up-to-date education. However, the compensation for adjuncts is alarmingly low, with an average annual salary of $21,979, far below the national average of around $100,000.
            </p>
            <p>
              This systemic undervaluation not only affects the quality of education but also limits the ability of adjuncts to secure tenure. The lack of fair pay and insufficient support from the administration exacerbate the challenges faced by adjunct faculty, making it difficult for them to balance their professional responsibilities with personal financial stability.
            </p>
            <p>
              The exploitation of adjunct faculty is not unique to GMU; statewide, Virginia's adjunct professors earn an average of $33,750 per year, which is still significantly below the national average. This disparity highlights a broader issue within higher education institutions that prioritize cost-cutting over the well-being and professional growth of their educators.
            </p>
          </Col>
        </Row>

        {/* Faculty Composition Section */}
        <Row className="mt-5">
          <Col>
            <h3><FaBalanceScale /> Faculty Composition at GMU</h3>
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
          </Col>
        </Row>

        {/* Salary Disparities Section */}
        <Row className="mt-5">
          <Col>
            <CardComponent
              title="Salary Disparities"
              text="There is a significant gender disparity in faculty salaries at GMU. Men at the professor 12-month contract level are paid approximately $50,000 more than their female counterparts. This discrepancy highlights the need for transparent and equitable salary structures within the institution."
              links={[
                {
                  url: 'https://ccbit.business.gmu.edu/wp-content/uploads/2022/03/Faculty-Overload-and-Adjunct-Pay-Matrix-2022.02.02.pdf',
                  label: 'Faculty Overload and Adjunct Pay Matrix',
                },
              ]}
            />
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Row className="mt-5" id="cta-section">
          <Col>
            <div className="cta-section text-center p-5 rounded" style={{ backgroundColor: '#0f4c81', color: '#fff' }}>
              <h2>Advocate for Change</h2>
              <p>
                It is imperative to advocate for fair compensation and better working conditions for adjunct faculty. By ensuring that adjuncts are adequately compensated, GMU can foster a more inclusive and supportive academic environment that benefits both educators and students.
              </p>
              <Button variant="light" size="lg" href="https://www.yoursupportlink.com">
                Support Fair Pay
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdjunctIssues;
