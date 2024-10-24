import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Navigation = ({ title }) => {
  return (
    <AppBar position="static" sx={{ background: 'transparent' }}>
      <Container>
        <Toolbar>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
              Home
            </Typography>
          </NavLink>
          <Typography variant="h6" sx={{ color: 'black' }}>
            / {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
