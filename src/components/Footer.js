// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> info@springdale.edu
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +1 (123) 456-7890
            </p>
            <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/admissions">Admissions</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Follow Us</h5>
            <Nav className="justify-content-start">
              <Nav.Link href="https://facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
