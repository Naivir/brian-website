// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'; // If using React Bootstrap
import './Header.css';
// import logo from '../assets/gmu-logo.png'; // Ensure the path is correct

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            // src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="GMU Logo"
          />{' '}
          Faculty Advocates
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact="true">
              High Workload
            </Nav.Link>
            <Nav.Link as={NavLink} to="/budget">
              Faculty Budget
            </Nav.Link>
            <Nav.Link as={NavLink} to="/adjunct-issues">
              Adjunct Issues
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
