import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            // const response = await fetch('http://localhost:8000/users');
            const response = await fetch('http://localhost:5000/users');
            const users = await response.json();
            const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
            
            if (user) {
                setError('');
                login(user);
                navigate('/');
            } else {
                window.alert('Invalid Username and Password');
            }
        } catch (error) {
            setError('Something went wrong try again later')
        }
       
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
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
                    Login
                </Button>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Don't have an account? 
                    <NavLink to="/signup" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>
                        Sign Up
                    </NavLink>
                </Typography>
            </form>
            {error && <p>{error}</p>}
        </Container>
    );
};

export default Login;
