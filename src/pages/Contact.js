import React from 'react';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';

const Contact = () => (
  <div className="contact p-4">
    <section className="contact-details">
      <h2>Contact Us</h2>
      <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: info@springdale.edu</p>
    </section>
    <section className="contact-form">
      <h2>Contact Form</h2>
      <ContactForm />
    </section>
    <section className="map">
      <h2>Find Us</h2>
      <GoogleMap />
    </section>
  </div>
);

export default Contact;
