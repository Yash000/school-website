import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import './GalleryPage.css';

const galleryItems = [
  {
    src: require("../assets/images/sports_day.jpg"),
    alt: 'Sports Day',
    eventType: 'Sports',
    date: '2023-06-15',
  },
  {
    src: require("../assets/images/science_exhibition.jpg"),
    alt: 'Science Exhibition',
    eventType: 'Science',
    date: '2023-05-10',
  },
  {
    src: require("../assets/images/cultural_fest.jpg"),
    alt: 'Cultural Fest',
    eventType: 'Culture',
    date: '2023-04-20',
  },
  {
    src: require("../assets/images/classroom.jpg"),
    alt: 'Classroom',
    eventType: 'Classroom',
    date: '2023-03-22',
  },
  {
    src: require("../assets/images/library.jpg"),
    alt: 'Library',
    eventType: 'Library',
    date: '2023-07-05',
  }
];


const GalleryPage = () => {
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [filter, setFilter] = useState({
    eventType: '',
    date: '',
  });

  useEffect(() => {
    let filtered = galleryItems;

    if (filter.eventType) {
      filtered = filtered.filter(
        (item) => item.eventType === filter.eventType
      );
    }

    if (filter.date) {
      filtered = filtered.filter((item) => item.date === filter.date);
    }

    setFilteredItems(filtered);
  }, [filter]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group controlId="eventType">
            <Form.Label>Filter by Event Type</Form.Label>
            <Form.Control
              as="select"
              name="eventType"
              value={filter.eventType}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Sports">Sports</option>
              <option value="Science">Science</option>
              <option value="Culture">Culture</option>
              <option value="Classroom">Classroom</option>
              <option value="Library">Library</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="date">
            <Form.Label>Filter by Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={filter.date}
              onChange={handleFilterChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {filteredItems.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={item.src} alt={item.alt} />
              <Card.Body>
                <Card.Text>{item.alt}</Card.Text>
                <Card.Text>{new Date(item.date).toLocaleDateString('en-IN')}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryPage;
