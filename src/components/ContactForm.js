// src/components/ContactForm.js
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ContactForm = () => (
  <Box component="form" noValidate autoComplete="off" p={4} bgcolor="white" boxShadow={3} borderRadius={2}>
    <Typography variant="h6" mb={2}>Contact Us</Typography>
    <TextField
      label="Name"
      variant="outlined"
      fullWidth
      required
      margin="normal"
    />
    <TextField
      label="Email"
      variant="outlined"
      fullWidth
      required
      margin="normal"
    />
    <TextField
      label="Message"
      variant="outlined"
      fullWidth
      required
      multiline
      rows={4}
      margin="normal"
    />
    <Button variant="contained" color="primary" type="submit" fullWidth>
      Send Message
    </Button>
  </Box>
);

export default ContactForm;
