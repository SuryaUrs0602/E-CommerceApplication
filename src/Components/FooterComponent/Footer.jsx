import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: '#fff', pt: 2, pb: 1, mt: 10 }}>
      <Container maxWidth="lg">
        {/* Ready to get started section */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h5">Ready to get started</Typography>
          <Typography variant="h5">Talk to us Today</Typography>
          <Button variant="contained" sx={{ mt: 2, backgroundColor: '#fff' }}>
            <NavLink to="/contact" style={{ color: '#0000FF', textDecoration: 'none' }}>
              Get Started
            </NavLink>
          </Button>
        </Box>

        {/* Footer main content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Cart Craze</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6">Subscribe to get more updates</Typography>     
            <form>
              <TextField
                type="email"
                placeholder="Your Email"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ mb: 1, backgroundColor: '#fff', borderRadius: '4px' }}
              />
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#fff', width: '100%', color: '#0000FF' }}>
                Subscribe
              </Button>
            </form>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6">Follow Us</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, alignItems: 'center' }}>
              <FacebookIcon sx={{ color: '#4267B2', cursor: 'pointer', fontSize: '24px' }} />
              <InstagramIcon sx={{ color: '#4267B2', cursor: 'pointer', fontSize: '24px' }} />
              <YouTubeIcon sx={{ color: '#4267B2', cursor: 'pointer', fontSize: '24px' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6">Call Us</Typography>
            <Typography variant="body1">+91 1234567890</Typography>
          </Grid>
        </Grid>

        {/* Footer bottom */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <hr style={{ borderColor: '#fff' }} />
          <Typography variant="body2" sx={{ mt: 2 }}>
            @{new Date().getFullYear()} CartCraze. All Rights Reserved
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <Typography variant="body2" sx={{ mx: 2, cursor: 'pointer' }}>
              PRIVACY POLICY
            </Typography>
            <Typography variant="body2" sx={{ mx: 2, cursor: 'pointer' }}>
              TERMS AND CONDITIONS
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

