// src/pages/AdjunctIssues.js
import React from 'react';
import { Container, Row, Col, Image, Table } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
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
    <Container className="page-container my-5">
      <Row>
        <Col md={6}>
          <Image src={adjunctImage} alt="Adjunct Professors" fluid rounded loading="lazy" />
        </Col>
        <Col md={6}>
          <h1><FaUserTie /> Issues with Adjunct Professors</h1>
          <p>
            At GMU, adjunct faculty constitute a significant portion of the workforce, making up 48% of the total faculty. These professionals play a crucial role in bridging the gap between academic theories and industry practices, ensuring that students receive relevant and up-to-date education. However, the compensation for adjuncts is alarmingly low, with an average annual salary of $21,979. The national average salary is around $100,000!.
          </p>
          <p>
            This systemic undervaluation not only affects the quality of education but also limits the ability of adjuncts to secure tenure. The lack of fair pay and insufficient support from the administration exacerbate the challenges faced by adjunct faculty, making it difficult for them to balance their professional responsibilities with personal financial stability.
          </p>
          <p>
            The exploitation of adjunct faculty is not unique to GMU; statewide, Virginia's adjunct professors earn an average of $33,750 per year, which is still significantly below the national average of approximately $100,000. This disparity highlights a broader issue within higher education institutions that prioritize cost-cutting over the well-being and professional growth of their educators.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3><FaBalanceScale /> Faculty Composition at GMU</h3>
          <Table striped bordered hover responsive>
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

      <Row className="mt-4">
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

      {/* <Row className="mt-4">
        <Col>
          <h3>Frequently Asked Questions</h3>
          <ul>
            <li>Is part-time the same as adjunct?</li>
            <li>What benefits do adjuncts miss out on besides job benefits like health care?</li>
            <li>How can adjuncts obtain tenure?</li>
            <li>What rights do adjuncts have at GMU?</li>
            <li>How does adjunctification impact academic governance?</li>
            <li>Are there opportunities for adjuncts to participate in curriculum development?</li>
          </ul>
        </Col>
      </Row> */}

      <Row className="mt-4">
        <Col>
          <CardComponent
            title="Call to Action"
            text="It is imperative to advocate for fair compensation and better working conditions for adjunct faculty. By ensuring that adjuncts are adequately compensated, GMU can foster a more inclusive and supportive academic environment that benefits both educators and students."
            links={[
              {
                url: '#',
                label: 'Support Fair Pay',
              },
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AdjunctIssues;
