// src/pages/About.js
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = () => (
  <Container>
    <Typography variant="h3" component="h1" gutterBottom>
      About Us
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Our History
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Vision
            </Typography>
            <Typography variant="body2" color="textSecondary">
              To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Mission
            </Typography>
            <Typography variant="body2" color="textSecondary">
              To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Box mt={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Principal's Message
          </Typography>
          <Typography variant="body2" color="textSecondary">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </Typography>
        </CardContent>
      </Card>
    </Box>
    <Box mt={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Infrastructure and Facilities
          </Typography>
          <Typography variant="body2" color="textSecondary">
            State-of-the-art science and computer labs, spacious and well-equipped classrooms, library with a vast collection of books and digital resources, sports facilities including a playground, gymnasium, and swimming pool.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </Container>
);

export default About;
