// src/pages/Students.js
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const studentLifeData = [
  { title: 'Student Council', description: 'The student council plays a crucial role in organizing events and representing student interests.' },
  { title: 'Clubs and Societies', description: 'We offer a variety of clubs and societies for students to explore their interests and develop new skills.' },
  { title: 'Sports Teams', description: 'Our sports teams participate in various inter-school competitions and have won numerous accolades.' },
];

const Students = () => (
  <Container>
    <Typography variant="h3" component="h1" gutterBottom>
      Students
    </Typography>
    <Grid container spacing={4}>
      {studentLifeData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Box mt={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Events and Activities
          </Typography>
          <Typography variant="body2" color="textSecondary">
            We organize various events and activities throughout the year, including cultural fests, science exhibitions, and sports day.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </Container>
);

export default Students;
