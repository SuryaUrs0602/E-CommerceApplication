import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import CartItem from './CartItem';
import { Grid, Typography, Divider, Box, Button } from '@mui/material';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import FormatPrice from '../../Utils/FormatPrice';
import { useAuth } from '../../Context/AuthContext';

const Cart = () => {
  const { cart = [], total_price, shipping_fee } = useCartContext();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div><h1>No Items in Cart</h1></div>
  }

  const orderDetails = {
    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      quantity: item.amount
    })),
    total: shipping_fee+total_price
  };

  const handleBuyClick = () => {
    if (user) {
      navigate('/order', { state: orderDetails });
    } else {
      navigate('/login');
    }
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={3}>
          <Typography variant="h6" align="center">Item</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" align="center">Price</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" align="center">Quantity</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" align="center">SubTotal</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" align="center">Remove</Typography>
        </Grid>
      </Grid>
      <Divider />

      <div>
        {cart.map((currData) => (
          <CartItem key={currData.id} {...currData} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '16px' }}>
      <NavLink to='/products' style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">Continue Shopping</Button>
      </NavLink>
      </div>


      <div>
        <div>
          <div>
            <p>SubTotal: </p>
            <p><FormatPrice price={total_price} /></p>
          </div>

          <div>
            <p>Shipping Fee: </p> 
            <p><FormatPrice price={shipping_fee} /> </p>
          </div>

          <hr />

          <div>
            <p>Order Total: </p>
            <p><FormatPrice price={shipping_fee + total_price} /> </p>
          </div>
        </div>
      </div>

      <div>
        <Button variant="contained" color="primary" onClick={handleBuyClick}>
            Buy
        </Button>
      </div>
    </Box>
  );
}

export default Cart;

