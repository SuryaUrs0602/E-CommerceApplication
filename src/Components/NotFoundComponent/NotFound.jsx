import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import { AccessAlarm } from '@mui/icons-material';

const NotFound = () => {
  return (
    <Container
      component="section"
      maxWidth="sm"
      style={{ textAlign: 'center', marginTop: '50px' }}
    >
      <Box 
        sx={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: 3,
        }}
      >
        <AccessAlarm fontSize="large" color="action" />
        <Typography variant="h2" color="error">404</Typography>
        <Typography variant="h5">OH, YOU ARE LOST!</Typography>
        <Typography variant="body1" sx={{ margin: '20px 0' }}>
          The page you are looking for doesn't exist. 
          How you got here is a mystery.
        </Typography>
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Go Back to Home
          </Button>
        </NavLink>
      </Box>
    </Container>
  );
}

export default NotFound;
