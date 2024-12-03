// src/pages/FacultyBudget.js
import React from 'react';
import { Container, Row, Col, Image, ProgressBar, Table, Button } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import HeroSection from '../components/HeroSection'; // Reusing the Hero component
import budgetImage from '../assets/budget.jpg'; // Ensure this image exists
import { FaMoneyBillWave, FaChartPie } from 'react-icons/fa';
import './FacultyBudget.css';

const FacultyBudget = () => {
  const budgetLinks = [
    {
      url: 'https://fiscal.gmu.edu/budget/budget-data/fiscal-year-2024-2025/',
      label: 'GMU Fiscal Year 2024-2025 Budget Data',
    },
    {
      url: 'https://www.highereddive.com/news/george-mason-antonin-scalia-law-school-faces-38m-losses/728321/#:~:text=And%20that\'s%20after%20posting%20annual,even%20steeper%20tuition%20revenue%20decline',
      label: 'GMU Law School Financial Challenges',
    },
    {
      url: 'https://infoguides.gmu.edu/collections/budget',
      label: 'GMU Budget Information',
    },
  ];

  const budgetData = [
    { name: 'Full-Time Faculty', value: 30.7 },
    { name: 'Administrative Faculty', value: 30.7 },
    { name: 'Classified Salaries', value: 39.5 },
    { name: 'College Work Study', value: 5.5 },
    { name: 'Adjuncts, Special Pay, Summer Faculty, and Wages', value: 7.2 },
    { name: 'Part-Time Faculty', value: 7.2 },
  ];

  const COLORS = ['#0f4c81', '#ffd700', '#6c757d', '#17a2b8', '#28a745', '#dc3545'];

  const facultyComposition = {
    fullTime: {
      count: 2133,
      percentage: 53,
      averageSalary: '$120,000',
      breakdown: {
        Professors: '$160,000',
        AssociateProfessors: '$110,000',
        AssistantProfessors: '$100,000',
        Instructors: '$80,000',
      },
    },
    partTime: {
      count: 4018,
      percentage: 47,
      averageSalary: '$22,000',
    },
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Challenges in Faculty Budget Allocation at GMU"
        subtitle="Analyzing Financial Strains and Advocating for Sustainable Funding"
        backgroundImage={budgetImage}
        buttonText="Support Budget Transparency"
        buttonLink="#cta-section"
      />

      <Container className="page-container">
        {/* Introduction Section */}
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={budgetImage} alt="Faculty Budget" fluid rounded className="shadow-sm" loading="lazy" />
          </Col>
          <Col md={6}>
            <h2><FaMoneyBillWave /> The Financial Struggles of GMU's Faculty</h2>
            <p>
              Despite receiving substantial funding from prominent federal officials, including a $50 million donation from a former judge, George Mason University (GMU) is projected to face a $13.2 million budget deficit in 2025. This financial strain affects critical areas such as libraries, which are cutting subscriptions to numerous scholarly databases, thereby impeding research capabilities.
            </p>
            <p>
              The current budget allocation reveals significant investments in faculty and administrative salaries, yet the high operational costs continue to drain resources. With 2,133 academic staff and 40,185 students (fall 2023), the administration-to-faculty ratio remains a pressing concern, complicating effective resource management.
            </p>
            <p>
              Additionally, GMU has been criticized for its questionable budget choices, such as spending $500,000 on a new logo that many find simplistic. In recent years, GMU has emphasized expanding satellite campuses and increasing student enrollment rather than fortifying or fixing existing problems. This lack of management is causing great strain on both students and faculty.
            </p>
            <p>
              The objective of this platform is to shed light on these budgetary challenges, enabling faculty to voice their concerns and advocate for more transparent and strategic financial planning. By fostering an open dialogue, we aim to hold administrators accountable and ensure that financial decisions align with the academic mission of the institution.
            </p>
          </Col>
        </Row>

        {/* Budget Allocation Section */}
        <Row className="mt-5">
          <Col>
            <h3><FaChartPie /> Budget Allocation Breakdown (Fiscal Year 2024-2025)</h3>
            {budgetData.map((item, index) => (
              <ProgressBar
                now={item.value}
                label={`${item.name} - ${item.value}%`}
                className="mb-3"
                key={index}
                variant={COLORS[index % COLORS.length]}
                animated
                striped
              />
            ))}
          </Col>
        </Row>

        {/* Impact of Budget Deficit Section */}
        <Row className="mt-5">
          <Col>
            <CardComponent
              title="Impact of Budget Deficit"
              text="The projected budget deficit of $13.2 million by 2025 poses significant threats to academic resources, faculty support, and student services. Essential programs may face cuts, and the quality of education could decline as resources become increasingly scarce."
              links={[
                {
                  url: 'https://infoguides.gmu.edu/collections/budget',
                  label: 'GMU Budget Information',
                },
              ]}
            />
          </Col>
        </Row>

        {/* Faculty Composition Section */}
        <Row className="mt-5">
          <Col>
            <h3><FaChartPie /> Faculty Composition at GMU</h3>
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

        {/* By Rank Section */}
        <Row className="mt-4">
          <Col>
            <h3>By Rank:</h3>
            <Table striped bordered hover responsive className="modern-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Average Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Professors</td>
                  <td>$157,322 (men earn ~$50k more than women)</td>
                </tr>
                <tr>
                  <td>Associate Professors</td>
                  <td>$109,334</td>
                </tr>
                <tr>
                  <td>Assistant Professors</td>
                  <td>$97,036</td>
                </tr>
                <tr>
                  <td>Instructors</td>
                  <td>$76,483</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        {/* Gender Disparity in Salaries Section */}
        <Row className="mt-5">
          <Col>
            <CardComponent
              title="Gender Disparity in Salaries"
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
              <h2>Advocate for Sustainable Budgeting</h2>
              <p>
                It's crucial to push for transparent and strategic financial planning at GMU. By ensuring that budget allocations prioritize academic excellence and faculty support, we can create a thriving educational environment for both educators and students.
              </p>
              <Button variant="light" size="lg" href="https://www.yoursupportlink.com">
                Support Budget Transparency
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FacultyBudget;
