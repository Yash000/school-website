// src/components/FacultyProfile.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const FacultyProfile = ({ name, role, qualification, experience }) => (
  <Card sx={{ maxWidth: 345, margin: 2 }}>
    <CardMedia
      component="img"
      alt={`${name}'s profile`}
      height="140"
      image="path/to/profile_image.jpg"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {role}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {qualification}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {experience}
      </Typography>
    </CardContent>
  </Card>
);

export default FacultyProfile;
