import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import CartAmountToggle from '../CartAmountComponent/CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

const AddToCart = ({ product }) => {

    const { addToCart } = useCartContext();
    

    const { colors, stock, id, image } = product;

    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(prevAmount => prevAmount-1) : setAmount(1);
    }

    const setIncrease = () => {
        amount < stock ? setAmount(prevAmount => prevAmount+1) : setAmount(stock);
    }

    return (
        <section>
            
            <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <NavLink to='/cart' style={{ textDecoration: 'none' }} onClick={() => addToCart(id, amount, image, product)}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        padding: '5px 10px', // Reduced padding
                        fontSize: '0.875rem', // Smaller font size
                        width: '80px',
                        '&:hover': {
                            backgroundColor: '#1976d2', // Custom hover color
                        },
                    }}
                >
                    Cart
                </Button>
            </NavLink>
        </Box>

        </section>
    );
};

export default AddToCart;











// COLOR PART ADD IF WANTED

{/* <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
                <Typography variant="body1" sx={{ marginRight: 1 }}>Select Color:</Typography>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {colors.map((color, index) => (
                        <Button
                            key={index}
                            sx={{
                                backgroundColor: color,
                                borderRadius: '50%',
                                width: 5, 
                                height: 20, 
                                padding: 0,
                                '&:hover': {
                                    opacity: 0.8,
                                },
                            }}
                        />
                    ))}
                </Box>
            </Box> */}