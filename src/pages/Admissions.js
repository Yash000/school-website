// src/pages/Admissions.js
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Admissions = () => (
  <Container>
    <Typography variant="h3" component="h1" gutterBottom>
      Admissions
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Admission Process
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Admission forms are available for download. Submit the completed form along with required documents at the school office.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Criteria
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Box mt={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Important Dates
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Admission Form Availability: March 1st<br />
            Last Date for Submission: March 31st<br />
            Entrance Test: April 15th<br />
            Announcement of Results: April 30th
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </Container>
);

export default Admissions;
