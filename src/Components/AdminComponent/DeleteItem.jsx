import React, { useState } from 'react'
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DeleteItem = () => {

    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/');
      }    

    const handleDelete = async(e) => {
        e.preventDefault();

        try{
            await axios.delete(`http://localhost:3000/products/${id}`);
            setMessage('Product deleted successfully')
            setId('');
        } catch (error) {
            setMessage('Error: some problem occured try again later')
            console.log('Some Error Occured', error)
        }
    }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Delete Product
        </Typography>

        <form onSubmit={handleDelete}>
          <TextField
            fullWidth
            margin="normal"
            label="Product ID"
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="error" 
            sx={{ mt: 2 }}
          >
            Delete
          </Button>
        </form>

        {message && (
          <Typography variant="body1" color={message.includes('successfully') ? 'green' : 'red'} sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}

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

export default DeleteItem
