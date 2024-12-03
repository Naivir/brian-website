// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
import logo from '../assets/logo.png'; // Ensure you have a high-quality logo image

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/index.html">
          <img
            src={logo}
            alt="Website Logo"
            className="logo"
          />
          <span className="brand-text">Faculty Advocates</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/high-work-load" exact="true" activeClassName="active-link">
              High Workload
            </Nav.Link>
            <Nav.Link as={NavLink} to="/budget" activeClassName="active-link">
              Faculty Budget
            </Nav.Link>
            <Nav.Link as={NavLink} to="/adjunct-issues" activeClassName="active-link">
              Adjunct Issues
            </Nav.Link>
            <Nav.Link as={NavLink} to="/join-our-movement" activeClassName="active-link">
              Join Our Movement
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
