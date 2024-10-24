import React from 'react';
import { InventoryContextProvider } from '../InventoryContext/InventoryContext';
import InventoryProductList from './InventoryProductList';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const InventoryDashboard = () => {

    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/additem');
    };

    return (
        <InventoryContextProvider>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb={3} // margin bottom
                textAlign="center" // Center text
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Inventory Dashboard
                </Typography>
                {/* <IconButton 
                    onClick={handleAddProduct} 
                    aria-label="add product" 
                    sx={{
                        backgroundColor: 'blue', // Blue background
                        color: 'white', // White icon color
                        '&:hover': {
                            backgroundColor: 'darkblue', // Darker blue on hover
                        },
                    }}
                >
                    <AddIcon /> 
                </IconButton> */}
                <Typography variant="h6" component="h1" gutterBottom>
                    Add Product
                    <IconButton
                        onClick={handleAddProduct}
                        aria-label="add product"
                        size="small" // Set to "small" to reduce the size
                        sx={{
                            backgroundColor: 'blue', // Blue background
                            color: 'white',// White icon color
                            '&:hover': {
                                backgroundColor: 'blue', // Darker blue on hover
                            },
                            padding: '2px', // Custom padding (optional)
                            marginLeft: '8px',
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Typography>
            </Box>
            <InventoryProductList />
        </InventoryContextProvider>
    );
};

export default InventoryDashboard;

