import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate(`/editprofile/${user.id}`);
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h4" component="div" gutterBottom>
                        Welcome, {user.name}!
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Email: {user.email}
                    </Typography>

                    <Button 
                        variant="contained" 
                        color="primary" 
                        sx={{ mt: 2 }}
                        onClick={handleProfile}
                    >
                        Edit Profile
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Profile;
