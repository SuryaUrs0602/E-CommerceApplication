import React from 'react';
import { Grid } from '@mui/material';
import Product from '../Product/Product';

const GridView = ({ products }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {products.map((curElement) => (
          <Grid item xs={12} sm={6} md={4} key={curElement.id}>
            <Product {...curElement} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GridView;
