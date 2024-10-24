import React from 'react';
import { NavLink } from 'react-router-dom';
import ApplicationLogo from '../../Images/ApplicationLogo.jpg';
import NavBar from './NavBarComponent/NavBar';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '1px 0', flexGrow: 1 }}>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <img src={ApplicationLogo} alt="App Logo" style={{ height: '50px', marginRight: '20px' }} />
          </NavLink>
          <Typography variant="h6" style={{ flexGrow: 0 }} />
          <NavBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

