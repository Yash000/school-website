// src/pages/Home.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Requires a loader
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const highlights = [
  { title: 'Annual Sports Day', description: 'Celebrating Excellence in Sports', img: require("../assets/images/sports_day.jpg") },
  { title: 'Science Exhibition', description: 'Showcasing Student Innovations', img: require("../assets/images/science_exhibition.jpg") },
  { title: 'Cultural Fest', description: 'Embracing Diversity and Creativity', img: require("../assets/images/cultural_fest.jpg") },
];

const Home = () => (
  <Container>
    <Box textAlign="center" my={4}>
      <Typography variant="h3" component="h1">
        Springdale Public School
      </Typography>
      <Typography variant="h6" component="p">
        Welcome to Springdale Public School, where we nurture young minds for a brighter future.
      </Typography>
    </Box>
    <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {highlights.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={item.title} style={{ height: 400, objectFit: 'cover' }} />
            <Typography variant="h6" component="p" sx={{ position: 'absolute', bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', width: '100%', padding: '10px' }}>
              {item.title}
            </Typography>
          </div>
        ))}
      </Carousel>
    </Box>
    <Box textAlign="center" my={4}>
      <Typography variant="h5">Quick Links</Typography>
      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        <Button variant="contained" component={Link} to="/about">About Us</Button>
        <Button variant="contained" component={Link} to="/academics">Academics</Button>
        <Button variant="contained" component={Link} to="/admissions">Admissions</Button>
        <Button variant="contained" component={Link} to="/faculty">Faculty</Button>
        <Button variant="contained" component={Link} to="/students">Students</Button>
        <Button variant="contained" component={Link} to="/gallery">Gallery</Button>
        <Button variant="contained" component={Link} to="/contact">Contact Us</Button>
      </Box>
    </Box>
  </Container>
);

export default Home;
