import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData = {
            name,
            email,
            password
        };
        try {
            // await axios.post('http://localhost:8000/users', userData);
            await axios.post('http://localhost:5000/users', userData);
            // I need to check the email if it exists or not using fetch method. If the email 
            //           is present I must provide msg saying to choose the different name
            navigate('/');
        } catch (error) {
            setError('Something went wrong');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Box>
                <Button variant="contained" color="primary" fullWidth type="submit">
                    Sign Up
                </Button>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Already have an account? 
                    <NavLink to="/login" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>
                        Login
                    </NavLink>
                </Typography>
            </form>
            {error && <p>{error}</p>} 
        </Container>
    );
};

export default SignUp;
