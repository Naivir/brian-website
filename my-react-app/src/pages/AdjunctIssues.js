// src/pages/AdjunctIssues.js
import React from 'react';
import { Container, Row, Col, Image, Table } from 'react-bootstrap'; // If using React Bootstrap
import CardComponent from '../components/CardComponent';
// import adjunctImage from '../assets/adjunct.jpg'; // Add a relevant image in assets
import './AdjunctIssues.css'; // Optional: For specific styling

const AdjunctIssues = () => {
  const links = [
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

  const facultyData = {
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
          {/* <Image src={adjunctImage} alt="Adjunct Professors" fluid rounded /> */}
        </Col>
        <Col md={6}>
          <h1>Issues with Adjunct Professors</h1>
          <p>
            At GMU, adjunct faculty constitute a significant portion of the workforce, with part-time employees making up 48% of the total faculty. These professionals play a crucial role in bridging the gap between academic theories and industry practices, ensuring that students receive relevant and up-to-date education. However, the compensation for adjuncts is alarmingly low, with an average annual salary of $21,979 seen on indeed. In comparison, the national average is $100,000!
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
          <h3>Faculty Composition at GMU</h3>
          <Table striped bordered hover>
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
                <td>{facultyData.fullTime.count}</td>
                <td>{facultyData.fullTime.percentage}%</td>
                <td>{facultyData.fullTime.averageSalary}</td>
              </tr>
              <tr>
                <td>Part-Time Faculty</td>
                <td>{facultyData.partTime.count}</td>
                <td>{facultyData.partTime.percentage}%</td>
                <td>{facultyData.partTime.averageSalary}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <CardComponent
            title="Salary Disparities"
            text="The stark difference in compensation between full-time and adjunct faculty raises concerns about equity and fairness within the institution. Full-time faculty earn significantly higher salaries, which can contribute to a more stable and productive academic environment. In contrast, adjuncts face financial instability, which may affect their ability to contribute effectively to the academic community."
            links={[
              {
                url: 'https://ccbit.business.gmu.edu/wp-content/uploads/2022/03/Faculty-Overload-and-Adjunct-Pay-Matrix-2022.02.02.pdf',
                label: 'Faculty Overload and Adjunct Pay Matrix',
              },
            ]}
          />
        </Col>
      </Row>

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

      <Row className="mt-4">
        <Col>
          <h3>Additional Issues:</h3>
          <ul>
            <li>Adjunct vs Full-Time: <a href="https://www.collegefactual.com/colleges/george-mason-university/academic-life/faculty-composition" target="_blank" rel="noopener noreferrer">Adjunctification at GMU</a></li>
            <li>Salary Disparities: <a href="https://ccbit.business.gmu.edu/wp-content/uploads/2022/03/Faculty-Overload-and-Adjunct-Pay-Matrix-2022.02.02.pdf" target="_blank" rel="noopener noreferrer">Faculty Overload and Adjunct Pay Matrix</a></li>
            <li>National vs. GMU Salaries: <a href="https://www.indeed.com/career-advice/pay-salary/adjunct-professor-salary" target="_blank" rel="noopener noreferrer">National Average Adjunct Salaries</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AdjunctIssues;
