// src/components/GoogleMap.js
import React from 'react';
import Box from '@mui/material/Box';

const GoogleMap = () => (
  <Box sx={{ width: '100%', height: '450px' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.731478997!2d-118.69192071000454!3d34.02016129900792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb28578b9fbb%3A0x3e1d4a6c15a0d3d8!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1592563627283!5m2!1sen!2sus"
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
      title="Google Map"
    ></iframe>
  </Box>
);

export default GoogleMap;
