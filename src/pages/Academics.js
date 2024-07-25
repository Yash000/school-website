// src/pages/Academics.js
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const academicsData = [
  {
    title: 'Primary (Grades 1-5)',
    content: 'English, Mathematics, Science, Social Studies, Art, Physical Education'
  },
  {
    title: 'Secondary (Grades 6-10)',
    content: 'English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art'
  },
  {
    title: 'Senior Secondary (Grades 11-12)',
    content: 'Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English. Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English'
  },
];

const Academics = () => (
  <Container>
    <Typography variant="h3" component="h1" gutterBottom>
      Academics
    </Typography>
    <Grid container spacing={4}>
      {academicsData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.content}
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
            Teaching Methodologies
          </Typography>
          <Typography variant="body2" color="textSecondary">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </Typography>
        </CardContent>
      </Card>
    </Box>
    <Box mt={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Educational Resources
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </Container>
);

export default Academics;
