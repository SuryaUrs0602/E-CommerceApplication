import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingImage from '../../../Images/MainImage.jpg';
import { Grid, Typography, Button } from '@mui/material';

const Main = ({ myData }) => {

  const { name } = myData;

  return (
    <section>
      <Grid container spacing={2} sx={{ padding: '20px' }}>

        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ marginBottom: '10px', color: '#1976d2' }}>Welcome to</Typography>
          <Typography variant="h2" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#1976d2' }}>{name}</Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Ducimus rem praesentium itaque animi iusto suscipit. Eaque, 
            cumque consectetur natus iste deserunt cum rerum ut, dolores 
            eius debitis, porro nam nihil.
          </Typography>
          <NavLink to='/products' style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">Shop Now</Button>
          </NavLink>
        </Grid>


        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <figure>
            <img src={ShoppingImage} alt="Main Image" style={{ maxWidth: '80%', height: 'auto' }} />
          </figure>
        </Grid>
      </Grid>
    </section>
  );
}

export default Main;
