// src/pages/FacultyBudget.js
import React from 'react';
import { Container, Row, Col, Image, ProgressBar, Table, Button } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import HeroSection from '../components/HeroSection'; // Reusing the Hero component
import budgetImage from '../assets/budget.jpg'; // Ensure this image exists
import gmuLogo from '../assets/gmu-logo.png'; // New asset
import studentAidGraph from '../assets/student-aid-graph.jpg'; // New asset
import { FaMoneyBillWave, FaChartPie, FaExclamationCircle } from 'react-icons/fa';
import './FacultyBudget.css';

const FacultyBudget = () => {
  const budgetLinks = [
    {
      url: 'https://fiscal.gmu.edu/budget/budget-data/fiscal-year-2024-2025/',
      label: 'GMU Fiscal Year 2024-2025 Budget Data',
    },
    {
      url: 'https://www.highereddive.com/news/george-mason-antonin-scalia-law-school-faces-38m-losses/728321/#:~:text=And%20that',
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

  const COLORS = ['#0f4c81']; // Keeping a single color as per the latest code

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
        // Adding source attribution for the hero image
        imageSource="*Source: <a href='https://fiscal.gmu.edu/wp-content/uploads/2023-2024-Executive-Summary-3.pdf' target='_blank' rel='noopener noreferrer'>Fiscal Year Executive Summary</a>"
      />

      <Container className="page-container">
        {/* Introduction Section */}
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={budgetImage} alt="Faculty Budget" fluid rounded className="shadow-sm" loading="lazy" />
            {/* Source Attribution for the Introduction Image */}
            <p className="image-source text-muted mt-2">
              *Source: <a href="https://fiscal.gmu.edu/wp-content/uploads/2023-2024-Executive-Summary-3.pdf" target="_blank" rel="noopener noreferrer">Fiscal Year Executive Summary</a>
            </p>
          </Col>
          <Col md={6} className="budget-intro">
            {/* Removed 'icon-red' class to keep the icon in default blue */}
            <h2><FaMoneyBillWave /> The Financial Struggles of GMU's Faculty</h2>
            <p>
              Despite receiving substantial funding from prominent federal officials, including a $50 million donation from a former judge, George Mason University (GMU) is projected to face a $13.2 million budget deficit in 2025. This financial strain affects critical areas such as libraries, which are cutting subscriptions to numerous scholarly databases, thereby impeding research capabilities.{' '}
              <a href="https://www.highereddive.com/news/george-mason-antonin-scalia-law-school-faces-38m-losses/728321/#:~:text=And%20that" target="_blank" rel="noopener noreferrer">
                [Read more]
              </a>
            </p>
            <p>
              The current budget allocation reveals significant investments in faculty and administrative salaries, yet the high operational costs continue to drain resources. With 2,133 academic staff and 40,185 students (fall 2023), the administration-to-faculty ratio remains a pressing concern, complicating effective resource management.
            </p>
            <p>
              Additionally, GMU has been criticized for its questionable budget choices, such as spending $500,000 on a new logo that many find simplistic. In recent years, GMU has emphasized expanding satellite campuses and increasing student enrollment rather than fortifying or fixing existing problems. This lack of management is causing great strain on both students and faculty.
            </p>
          </Col>
        </Row>

        {/* Budget Allocation Breakdown Section */}
        <Row className="mt-5">
          <Col>
            <h3><FaChartPie className="icon-red" /> Budget Allocation Breakdown (Fiscal Year 2024-2025)</h3>
            {budgetData.map((item, index) => {
              const filledWidth = item.value * 2; // Calculate filled width
              const isSmallBar = item.value <= 30; // Set a threshold for "small" bars

              return (
                <div className="progress-bar-container mb-3" key={index}>
                  <div className="progress custom-progress-bar">
                    <div
                      className="progress-bar striped animated"
                      role="progressbar"
                      style={{
                        width: `${filledWidth}%`,
                        backgroundColor: COLORS[index % COLORS.length],
                      }}
                    ></div>
                    <span
                      className="progress-bar-label"
                      style={{
                        left: isSmallBar ? "5px" : `calc(${filledWidth}% / 2)`, // Position dynamically
                        transform: isSmallBar ? "none" : "translateX(-50%)", // Prevent centering if too small
                        fontSize: "1rem",
                        whiteSpace: "nowrap", // Prevent wrapping
                      }}
                    >
                      {`${item.name} - ${item.value}%`}
                    </span>
                  </div>
                </div>
              );
            })}
            <p className="mt-3">
              It's concerning that classified salaries account for such a high percentage of the budget, while adjunct and part-time faculty are compensated poorly despite comprising 48% of our faculty. This imbalance not only affects faculty morale but also the quality of education provided to students.
            </p>
          </Col>
        </Row>

        {/* Impact of Budget Deficit Section */}
        <Row className="mt-5 budget-deficit">
          <Col>
            <CardComponent
              title="Impact of Budget Deficit"
              text="The projected budget deficit of $13.2 million by 2025 poses significant threats to academic resources, faculty support, and student services. Essential programs may face cuts, and the quality of education could decline as resources become increasingly scarce. Already, libraries and database subscriptions have been reduced, limiting access to vital research materials. What comes next? Further cuts could jeopardize faculty positions, student services, and essential academic programs."
              links={[
                {
                  url: 'https://infoguides.gmu.edu/collections/budget',
                  label: 'Learn More', // Changed label to 'Learn More'
                },
              ]}
            />
            {/* Removed the redundant 'Learn more' link below the card */}
          </Col>
        </Row>

        {/* GMU Logo Spending Section */}
        <Row className="mt-5 gmu-logo-section">
          <Col md={6} className="order-md-1">
            <Image src={gmuLogo} alt="GMU Logo" fluid rounded className="shadow-sm" loading="lazy" />
            {/* Source Attribution for GMU Logo Image */}
            <p className="image-source text-muted mt-2">
              *Source: GMU Official Logo
            </p>
          </Col>
          <Col md={6} className="order-md-2">
            <h3><FaExclamationCircle className="icon-red" /> GMU Logo Redesign Spending</h3>
            <p>
              Recently, GMU invested approximately $500,000 in redesigning its logo through a private company. While a fresh logo can modernize the university's image, the substantial cost raises questions about budget priorities. What else could this money have been used for? Enhancements to academic programs, faculty support, student services, or improving existing infrastructure are critical areas that may benefit more from such an investment.
            </p>
            <p>
              Allocating funds towards tangible improvements that directly impact faculty and students could foster a more supportive and effective educational environment.
            </p>
          </Col>
        </Row>

        {/* Student Aid for GMU Section */}
        <Row className="mt-5 student-aid-section">
          <Col md={6} className="order-md-1">
            <h3><FaExclamationCircle className="icon-red" /> Student Aid for GMU</h3>
            <p>
              The graph illustrates the distribution of student aid across various colleges at GMU. Despite the high cost of education, student aid remains insufficient, placing a significant financial burden on students. Unlike institutions like UVA, GMU could benefit from increased federal aid allocations to alleviate student debt and enhance educational accessibility.
            </p>
            <h5>Result of Financial Burden on Students</h5>
            <p>
              Teachers are already under considerable stress, and their role extends beyond instruction to mentoring students facing mental health crises. The financial burden exacerbates this issue, as students struggle to balance academic responsibilities with part-time work and financial instability. This situation not only affects students' academic performance but also their overall well-being.
            </p>
          </Col>
          <Col md={6} className="order-md-2">
            <Image src={studentAidGraph} alt="Student Aid Distribution" fluid rounded className="shadow-sm" loading="lazy" />
            {/* Source Attribution for Student Aid Graph */}
            <p className="image-source text-muted mt-2">
              *Source: <a href="https://jlarc.virginia.gov/pdfs/presentations/Rpt594Pres.pdf" target="_blank" rel="noopener noreferrer">J. Larc Presentation</a>
            </p>
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Row className="mt-5" id="cta-section">
          <Col>
            <div className="cta-section text-center p-5 rounded">
              <h2>Advocate for Change</h2>
              <p>
                It is imperative to advocate for fair compensation and better working conditions for all faculty members. By ensuring that both tenure-track and non-tenure-track faculty are adequately supported, GMU can foster a more inclusive and equitable academic environment that benefits educators and students alike.
              </p>
              {/* Changed button text to 'Learn More' */}
              <Button variant="light" size="lg" href="/join-our-movement">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default FacultyBudget;
