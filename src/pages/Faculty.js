import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const facultyData = [
  { name: 'John Doe', position: 'Principal', qualifications: 'M.Ed, 20 years of experience in educational administration', image: 'path/to/image' },
  { name: 'Jane Smith', position: 'Vice Principal', qualifications: 'M.Sc. in Physics, 15 years of teaching experience', image: 'path/to/image' },
  { name: 'Emily Johnson', position: 'English Teacher', qualifications: 'M.A. in English, 10 years of teaching experience', image: 'path/to/image' },
  // Add more faculty as needed
];

const Faculty = () => (
  <Container>
    <Typography variant="h3" component="h1" gutterBottom>
      Faculty
    </Typography>
    <Grid container spacing={4}>
      {facultyData.map((member, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Avatar alt={member.name} src={member.image} sx={{ width: 56, height: 56, marginRight: 2 }} />
                <Box>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member.position}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="textSecondary" mt={2}>
                {member.qualifications}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Faculty;
