// src/pages/FacultyBudget.js
import React from 'react';
import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap'; // If using React Bootstrap
import CardComponent from '../components/CardComponent';
// import budgetImage from '../assets/budget.jpg'; // Add a relevant image in assets
import './FacultyBudget.css'; // Optional: For specific styling

const FacultyBudget = () => {
  const links = [
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

  return (
    <Container className="page-container my-5">
      <Row>
        <Col md={6}>
          {/* <Image src={budgetImage} alt="Faculty Budget" fluid rounded /> */}
        </Col>
        <Col md={6}>
          <h1>Faculty Need More Budget</h1>
          <p>
            Despite receiving substantial funding from prominent federal officials, including a $50 million donation from a former judge, George Mason University (GMU) is projected to face a $13.2 million budget deficit in 2025. This financial strain affects critical areas such as libraries, which are cutting subscriptions to numerous scholarly databases, thereby impeding research capabilities.
          </p>
          <p>
            The current budget allocation reveals significant investments in faculty and administrative salaries, yet the high operational costs continue to drain resources. With 2,133 academic staff and 40,185 students (fall 2023), the administration-to-faculty ratio remains a pressing concern, complicating effective resource management.
          </p>
          <p>
            The objective of this platform is to shed light on these budgetary challenges, enabling faculty to voice their concerns and advocate for more transparent and strategic financial planning. By fostering an open dialogue, we aim to hold administrators accountable and ensure that financial decisions align with the academic mission of the institution.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Budget Allocation Breakdown (Fiscal Year 2024-2025)</h3>
          <ProgressBar now={30.7} label="Full-Time Faculty - 30.70%" className="mb-2" />
          <ProgressBar now={30.7} label="Administrative Faculty - 30.70%" className="mb-2" />
          <ProgressBar now={39.5} label="Classified Salaries - 39.50%" className="mb-2" />
          <ProgressBar now={5.5} label="College Work Study - 5.50%" className="mb-2" />
          <ProgressBar now={7.2} label="Adjuncts, Special Pay, Summer Faculty, and Wages - 7.20%" className="mb-2" />
          <ProgressBar now={7.2} label="Part-Time Faculty - 7.20%" className="mb-2" />
        </Col>
      </Row>

      <Row className="mt-4">
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

      <Row className="mt-4">
        <Col>
          <CardComponent
            title="Call to Action"
            text="We urge faculty and stakeholders to engage in constructive discussions about budget allocation and financial planning. By advocating for increased transparency and responsible spending, we can work towards a sustainable financial future that supports academic excellence."
            links={[
              {
                url: '#',
                label: 'Join the Discussion',
              },
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FacultyBudget;
