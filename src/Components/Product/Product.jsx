import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../../Utils/FormatPrice';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';


const Product = ({ id, name, image, price, category }) => {
  return (
    <NavLink to={`/singleproduct/${id}`} style={{ textDecoration: 'none' }}>
            <Card>
                <CardMedia
                    component="img"
                    height="180" 
                    image={image}
                    alt={name}
                    style={{ position: 'relative' }}
                />
                
                <CardContent style={{ position: 'relative', padding: '16px' }}>
                    <Box
                        position="absolute"
                        bottom={10}
                        left={0}
                        marginTop={2}
                    >
                        <Typography variant="h6">{name}</Typography>
                    </Box>
                    <Box
                        position="absolute"
                        bottom={10}
                        right={0}
                        marginTop={2}
                    >
                        <Typography variant="body1" color="primary">{<FormatPrice price={price} />}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </NavLink>
  );
};

export default Product
