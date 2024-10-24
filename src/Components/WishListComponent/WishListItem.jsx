// import React from 'react'
// import { Grid } from '@mui/material';
// import { useProductContext } from '../../Context/ProductContext';
// import { FaTrash } from 'react-icons/fa';
// import { Typography, IconButton } from '@mui/material';
// import { useWishListContext } from '../../Context/WishListContext';

// const WishListItem = ( {id, name, image, price, amount } ) => {

//     const { singleProduct } = useProductContext();

//     const { removeFromFav } = useWishListContext();

//   return (
//     <Grid container spacing={2} sx={{ marginBottom: 2 }}>
//             {/* Item Column */}
//             <Grid item xs={3} container alignItems="center">
//                 <Grid item sx={{ pr: 2 }}>
//                     <img src={image} alt={name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
//                 </Grid>
//                 <Grid item>
//                     <Typography variant="body1" sx={{ textAlign: 'right' }}>{name}</Typography>
//                 </Grid>
//             </Grid>

//             {/* Remove Column */}
//             <Grid item xs={2} sx={{ textAlign: 'center' }}>
//                 <IconButton onClick={() => removeFromFav(id)}>
//                     <FaTrash />
//                 </IconButton>
//             </Grid>
//         </Grid>
//   )
// }

// export default WishListItem












import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import { FaTrash } from 'react-icons/fa';
import { useWishListContext } from '../../Context/WishListContext';

const WishListItem = ({ id, name, image, price }) => {
    const { removeFromFav } = useWishListContext();

    return (
        <Card sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, boxShadow: 3 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Grid container alignItems="center">
                    {/* Item Column */}
                    <Grid item xs={8} container alignItems="center">
                        <Grid item sx={{ pr: 2, ml: 50 }}>
                            <img
                                src={image}
                                alt={name}
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">{name}</Typography>
                        </Grid>
                    </Grid>

                    {/* Remove Column */}
                    <Grid item xs={4} sx={{ textAlign: 'right', pr: 50}}>
                        <IconButton color="error" onClick={() => removeFromFav(id)}>
                            <FaTrash />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default WishListItem;
