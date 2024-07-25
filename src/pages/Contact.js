import React from 'react';
import GoogleMap from '../components/GoogleMap';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Contact = () => (
  <div className="contact p-4">
    <section className="contact-details">
      <h2>Contact Us</h2>
      <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: info@springdale.edu</p>
      <Container className="contact-us-page mt-4">
      <Row>
        <Col md={12}>
          <h1 className="text-center">Contact Us</h1>
          <p className="text-center">
            We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
          </p>
          {/* Embed Typeform here */}
          <div className="typeform-container">
            <iframe
              title="Contact Form"
              src="https://s23j1xzqf8z.typeform.com/to/DwawdmFm" // Replace with your Typeform URL
              width="100%"
              height="500"
              frameBorder="0"
              allow="camera; microphone; autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
      <h2>Find Us</h2>
      <GoogleMap />
    </section>
  </div>
);

export default Contact;
