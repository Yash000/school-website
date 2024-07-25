// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Carousel, Button, Card } from 'react-bootstrap';
import './Home.css';

const carouselItems = [
  {
    src: require("../assets/images/sports_day.jpg"),
    alt: 'Sports Day',
    caption: 'Annual Sports Day - Celebrating Excellence in Sports',
  },
  {
    src: require("../assets/images/science_exhibition.jpg"),
    alt: 'Science Exhibition',
    caption: 'Science Exhibition - Showcasing Student Innovations',
  },
  {
    src: require("../assets/images/cultural_fest.jpg"),
    alt: 'Cultural Fest',
    caption: 'Cultural Fest - Embracing Diversity and Creativity',
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={item.src}
              alt={item.alt}
            />
            <Carousel.Caption>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="mt-4">
        <Row>
          <Col md={6} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Welcome to Springdale Public School</Card.Title>
                <Card.Text>
                  At Springdale, we nurture young minds for a brighter future. Explore our website to learn more about our school, academics, and vibrant community.
                </Card.Text>
                <Button variant="primary" href="/about">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Key Highlights</Card.Title>
                <Card.Text>
                  Discover the highlights of our school year, including exciting events, achievements, and activities that make our school a vibrant place to learn and grow.
                </Card.Text>
                <Button variant="primary" href="/gallery">
                  View Gallery
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
