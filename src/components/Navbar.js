// src/components/Navbar.js
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Springdale Public School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/academics">
              <Nav.Link>Academics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admissions">
              <Nav.Link>Admissions</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faculty">
              <Nav.Link>Faculty</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/students">
              <Nav.Link>Students</Nav.Link>
            </LinkContainer>
            <Button href='/contact' variant="outline-light" className="ml-2">Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
