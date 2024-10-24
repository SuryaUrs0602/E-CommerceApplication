import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../Context/ProductContext';
import Navigation from '../NavigationComponent/Navigation';
import MyImage from '../ImageComponent/MyImage';
import FormatPrice from '../../Utils/FormatPrice';
import { TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { Grid, Typography, Box, Paper } from '@mui/material';
import Stars from '../StarComponent/Stars';
import AddToCart from '../AddToCartComponent/AddToCart';
import AddToWishList from '../AddToWishListComponent/AddToWishList';

  // const API = `https://api.pujakaitem.com/api/products`;
const API = "http://localhost:3000/products";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  const {
    id: alias,
    name,
    image,
    company,
    category,
    price,
    description,
    stock,
    stars,
    reviews
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <div>.....Loading</div>;
  }

  return (
    <section>
      <Navigation title={name} />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} md={6}>
          <MyImage imgs={image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>{name}</Typography>

            <Stars stars={stars} review={reviews}/>
  
            <Typography variant="h5" color="primary">
              Deal of the Day: <FormatPrice price={price} />
            </Typography>
            <Typography variant="body2" paragraph>{description}</Typography>

            <Box display="flex" justifyContent="space-between" flexWrap="wrap" mb={2}>
              <Box display="flex" alignItems="center" width="25%">
                <TbTruckDelivery />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>Free Delivery</Typography>
              </Box>
              <Box display="flex" alignItems="center" width="25%">
                <TbReplace />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>30 days Replacement</Typography>
              </Box>
              <Box display="flex" alignItems="center" width="25%">
                <TbTruckDelivery />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>Crazy Delivery</Typography>
              </Box>
              <Box display="flex" alignItems="center" width="25%">
                <MdSecurity />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>Year Warranty</Typography>
              </Box>
            </Box>

            <Typography variant="body2">Available: <span><b>{stock > 0 ? "In Stock" : "Not Available"}</b></span></Typography>
            <Typography variant="body2">Category: <span><b>{category}</b></span></Typography>
            <Typography variant="body2">Brand: <span><b>{company}</b></span></Typography>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
            {stock > 0 && <AddToWishList product={singleProduct} />}
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}

export default SingleProduct;
