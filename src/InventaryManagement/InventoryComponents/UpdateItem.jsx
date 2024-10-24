import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box, FormLabel, Radio, RadioGroup, FormControlLabel, FormControl, FormGroup } from '@mui/material';
import axios from 'axios';

const UpdateItem = () => {

    const { id } = useParams();
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
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async() => {
            try{
                const response = await axios.get(`http://localhost:3000/products`);
                const products = response.data;
                const matchedProduct = products.find(product => product.id === id)
                if (matchedProduct) {
                    setName(matchedProduct.name);
                    setCompany(matchedProduct.company);
                    setPrice(matchedProduct.price);
                    setDescription(matchedProduct.description);
                    setCategory(matchedProduct.category);
                    setFeatured(matchedProduct.featured)
                    setReviews(matchedProduct.reviews);
                    setStars(matchedProduct.stars);
                    setStock(matchedProduct.stock);
                    setImage(matchedProduct.image);
                }
            } catch (error) {
                console.log('Some problem occured', error);
            }
        }
        fetchProduct();
    }, [id])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const updatedProduct = {
            name, company, price, description, category, featured , reviews, stars, stock, image
        }
        try {
            await axios.put(`http://localhost:3000/products/${id}`, updatedProduct);
            navigate('/inventory');
        } catch (error) {
            console.log('Some error occured');            
        }
    }

    const handleCancel = () => {
        navigate('/inventory');
    }    
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
           Update Product
        </Typography>
        <form onSubmit={handleSubmit}>
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
            Update Product
          </Button>
        </form>

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

export default UpdateItem
