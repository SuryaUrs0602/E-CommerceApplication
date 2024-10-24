import React, { useState } from 'react'
import axios from 'axios';
import { TextField, Button, Typography, Container, Box, FormLabel, Radio, RadioGroup, FormControlLabel, FormControl, FormGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddNewItem = () => {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [reviews, setReviews] = useState('');
  const [stars, setStars] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');
  const [featured, setFeatured] = useState('');

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/inventory');
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newProduct = {
      id, name, company, price, description, category, featured, reviews, stars, stock, image
    };

    try {
      await axios.post('http://localhost:3000/products', newProduct);
      setMessage('Product Added Successfully');
      navigate('/inventory')
      setId('');
      setName('');
      setCompany('');
      setPrice('');
      setDescription('');
      setCategory('');
      setReviews('');
      setStars('');
      setStock('');
      setImage('');
    } catch (error) {
      setMessage('Some Error occured try again later')
      console.log('Some Error Occured', error)
    }
  }
  
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add a New Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Product ID"
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Product Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Company Name"
            variant="outlined"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Product Price"
            type="number"
            variant="outlined"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Product Image URL"
            variant="outlined"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Product Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Product Category"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <FormControl margin="normal" style={{ display: 'flex' }}>
            <FormGroup row style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                <FormLabel style={{ marginRight: '16px' }}>Feature Product</FormLabel>
                <RadioGroup
                    row
                    value={featured ? 'true' : 'false'} 
                    onChange={(e) => setFeatured(e.target.value === 'true')}
                >
                    <FormControlLabel value="true" control={<Radio />} label="True" />
                    <FormControlLabel value="false" control={<Radio />} label="False" />
                </RadioGroup>
            </FormGroup>
        </FormControl>
          <TextField
            fullWidth
            margin="normal"
            label="Product Review Count"
            type="number"
            variant="outlined"
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Product Stars"
            type="number"
            variant="outlined"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required
            step="0.1"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Product Stock"
            type="number"
            variant="outlined"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
          >
            Add Product
          </Button>
        </form>
        {message && <p>{message}</p>}

        <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
      </Box>
    </Container>
  )
}

export default AddNewItem
