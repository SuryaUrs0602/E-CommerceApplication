import React from 'react';
import { useProductContext } from '../../Context/ProductContext';
import Product from '../Product/Product';
import { Container, Grid, Typography, Box } from '@mui/material';

const FeatureProducts = () => {
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) return <div> ...Loading </div>;

    return (
        <Container>
            <Box textAlign="center" my={4}>
                <Typography variant="h4">Check Now</Typography>
                <Typography variant="h5" color="textSecondary">Our Featured Services</Typography>
            </Box>
            <Grid container spacing={4} justifyContent="center">
                {featureProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Product {...product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FeatureProducts;
