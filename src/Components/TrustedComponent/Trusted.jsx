import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
 
// Import your logos (place the logos in your project's assets folder)
import zeinaLogo from '../../Images/FirstCompany.jpg';
import circleLogo from '../../Images/SecondCompany.jpg';
import logicLogo from '../../Images/ThirdImage.jpg';
import heartLogo from '../../Images/FourthImage.jpg';
import chartzLogo from '../../Images/FifthImage.jpg';
 
const Trusted = () => {
    const companies = [
        { name: 'ZEINA', logo: zeinaLogo },
        { name: 'CIRCLE', logo: circleLogo },
        { name: 'LOGIC+', logo: logicLogo },
        { name: 'HEART', logo: heartLogo },
        { name: 'CHARTZ', logo: chartzLogo },
    ];
 
    return (
        <Box sx={{ textAlign: 'center', py: 5, backgroundColor: '#f9f9f9', mt: 6 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                Trusted By 1000+ Companies
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {companies.map((company, index) => (
                    <Grid item key={index}>
                        <Avatar
                            alt={company.name}
                            src={company.logo}
                            sx={{
                                width: 80,
                                height: 80,
                                filter: 'grayscale(100%)',
                                opacity: 0.7,
                                '&:hover': {
                                    filter: 'none',
                                    opacity: 1,
                                },
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
 
export default Trusted;