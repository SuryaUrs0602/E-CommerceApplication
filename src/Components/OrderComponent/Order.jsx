import React, { useState } from 'react'
import { Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import FormatPrice from '../../Utils/FormatPrice';
import { useCartContext } from '../../Context/CartContext';
import { useAuth } from '../../Context/AuthContext';
import axios from 'axios';

const Order = () => {

    const { user } = useAuth();
    const { clearCart } = useCartContext();
    const location = useLocation();
    const { items, total } = location.state || { items: [], total: 0 };
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleOrder = async() => {
        setOrderPlaced(true);

        const orderData = {
            userId: user.id,
            userName: user.name,
            userEmail: user.email,
            orders: { items, total } 
        }

        try{
            // await axios.post('http://localhost:4000/all_details', orderData);
            await axios.post('http://localhost:5000/all_details', orderData);
            clearCart();
        } catch (error) {
            console.log('Some error occured', error)
        }

        for (const item of items) {
            const { id, quantity } = item;
            try {

                const response = await fetch(`http://localhost:3000/products/${id}`);
                const product = await response.json();

                if (product && product.stock >= quantity) {
                    const updatedQuantity = product.stock - quantity;

                    await fetch(`http://localhost:3000/products/${id}`, {
                        method: 'PUT',
                        Headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ ...product, stock: updatedQuantity }),
                    });
                } else {
                    console.error('Insufficient Stock')
                }
            } catch (error) {
                console.error('Error updating the quantity', error);
            }
        }
    };

  return (
    <div>
        {orderPlaced ? (
            <h1>Order Placed Successfully</h1>
        ) : (
            <>
                <h1>Your Orders</h1>
                <h2>Total: <FormatPrice price={total} /></h2>
                <Box sx={{mb: 2}}>
                    <Button variant="contained" color="primary" onClick={handleOrder}>Order</Button>
                </Box>


                <NavLink to='/cart' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">Cancel</Button>
                </NavLink>
            </>
        )}
    </div>
  )
}

export default Order
