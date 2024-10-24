import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import { useWishListContext } from '../../Context/WishListContext';

const AddToWishList = ({ product }) => {

    const { id, name, image, category } = product;

    const { addToWishList, wishListCart } = useWishListContext();

    const [added, setAdded] = useState(false);

    useEffect(() => {
        const itemExists = wishListCart.some(item => item.id === id);
        setAdded(itemExists);
    }, [wishListCart, id]);

    const handleClick = () => {
        addToWishList(id, name, category, image, product);
        setAdded(true);
    }

  return (
    <div>
      
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
                    // onClick={() => addToWishList(id, name, category, image, product)}
                    onClick={handleClick}
                    disabled={added}
                >
                    {/* WishList */}
                    {added ? 'In WishList' : 'Add to WishList'}
                </Button>
    </div>
  )
}

export default AddToWishList
