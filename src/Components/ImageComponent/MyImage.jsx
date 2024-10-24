import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

const MyImage = ({ imgs }) => {
  const [mainImage, setMainImage] = useState(imgs);

  useEffect(() => {
    if (imgs) {
      setMainImage(imgs);
    }
  }, [imgs]);

  if (!mainImage) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <img
          src={mainImage}
          alt="Main Image" 
          style={{ width: '100%', height: '100%', borderRadius: 8, objectFit: 'contain' }}
        />
      </Grid>
    </Grid>
  );
};

export default MyImage;
