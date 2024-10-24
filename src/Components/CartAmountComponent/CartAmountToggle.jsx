import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Button, Box, Typography } from '@mui/material';

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
                onClick={setDecrease}
                sx={{
                    backgroundColor: 'transparent',
                    minWidth: 0,
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <FaMinus />
            </Button>
            <Typography variant="body1">{amount}</Typography>
            <Button
                onClick={setIncrease}
                sx={{
                    backgroundColor: 'transparent',
                    minWidth: 0,
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <FaPlus />
            </Button>
        </Box>
    );
};

export default CartAmountToggle;
