import React from 'react';
import FormatPrice from '../../Utils/FormatPrice';
import CartAmountToggle from '../CartAmountComponent/CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { Grid, Typography, IconButton } from '@mui/material';
import { useCartContext } from '../../Context/CartContext';
import { useProductContext } from '../../Context/ProductContext';

const CartItem = ({ id, name, image, price, amount }) => {

    const { removeItem, setIncrease, setDecrease } = useCartContext();
    //
    const { singleProduct } = useProductContext();
    const { stock } = singleProduct;

    return (
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            {/* Item Column */}
            <Grid item xs={3} container alignItems="center">
                <Grid item sx={{ pr: 2 }}>
                    <img src={image} alt={name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                </Grid>
                <Grid item>
                    <Typography variant="body1" sx={{ textAlign: 'right' }}>{name}</Typography>
                </Grid>
            </Grid>

            {/* Price Column */}
            <Grid item xs={2}>
                <Typography variant="body1">
                    <FormatPrice price={price} />
                </Typography>
            </Grid>

            {/* Quantity Column */}
            <Grid item xs={2}>
                <CartAmountToggle amount={amount} setDecrease={() => setDecrease(id)} setIncrease={() => setIncrease(id, stock)} />
            </Grid>

            {/* SubTotal Column */}
            <Grid item xs={2}>
                <Typography variant="body1">
                    <FormatPrice price={price * amount} />
                </Typography>
            </Grid>

            {/* Remove Column */}
            <Grid item xs={2} sx={{ textAlign: 'center' }}>
                <IconButton color='error' onClick={() => removeItem(id)}>
                    <FaTrash />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default CartItem;
