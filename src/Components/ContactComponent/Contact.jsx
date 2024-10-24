import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setUsername(user.name);
      setEmail(user.email);
    } else {
      setUsername('');
      setEmail('');
    }
  }, [user])

  const handleSubmit = async(e) => {
    e.preventDefault();

    const contactDetails = {
      username,
      email,
      message
    }

    try{
      // await axios.post('http://localhost:9000/messages', contactDetails);
      await axios.post('http://localhost:5000/messages', contactDetails);
      setMessage('');
      alert('Message sent successfully');
    } catch (error) {
      console.log('An Error occurred', error);
      alert('Failed to send the message')
    }


    
  };

  return (
    <>
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Feel Free to Contact Us
      </Typography>
    </Container>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d578.0811404839505!2d77.622074644695!3d12.917304831879788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f0d42621bd%3A0x1a7a798c03acbe6d!2sIn%20Time%20Tec!5e0!3m2!1sen!2sin!4v1726867310056!5m2!1sen!2sin" 
        width="100%" 
        height="300" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

    <Container>
      <Box sx={{ mt: 4, maxWidth: 400, mx: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Username" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          <TextField 
            label="Email" 
            variant="outlined" 
            type="email" 
            fullWidth 
            margin="normal" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <TextField 
            label="Message" 
            variant="outlined" 
            multiline 
            rows={4} 
            fullWidth 
            margin="normal" 
            required 
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send
          </Button>
        </form>
      </Box>
    </Container>
    </>
  );
};

export default Contact;
