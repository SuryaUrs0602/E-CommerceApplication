import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import MoneyIcon from '@mui/icons-material/Money';
import ContactlessIcon from '@mui/icons-material/Contactless';

const Services = () => {
  return (
    <Grid 
      container 
      spacing={3} 
      style={{ padding: '20px', maxHeight: '100vh', alignItems: 'stretch', marginTop: '15px' }}
    >
      {/* First Column: Shipping */}
      <Grid item xs={12} sm={4} style={{ display: 'flex' }}>
        <Paper 
          elevation={4} 
          style={{ padding: '20px', margin: 'auto 0',  textAlign: 'center', borderRadius: '8px', backgroundColor: '#ffffff', flex: 1 }}
        >
          <LocalShippingIcon style={{ fontSize: '60px', color: '#1976d2' }} />
          <Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Fast and Safe Delivery
          </Typography> 
          <Typography variant="body2" color="textSecondary">
            We ensure your packages arrive on time and in perfect condition.
          </Typography>
        </Paper>
      </Grid>

      {/* Second Column: Non Contact Shipping and Money Back */}
      <Grid item xs={12} sm={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Paper 
          elevation={4} 
          style={{ padding: '20px', textAlign: 'center', borderRadius: '8px', backgroundColor: '#ffffff', marginBottom: '15px', flex: 1 }}
        >
          <SecurityIcon style={{ fontSize: '60px', color: '#1976d2' }} />
          <Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Non Contact Shipping
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Stay safe with our non-contact delivery options.
          </Typography>
        </Paper>
        <Paper 
          elevation={4} 
          style={{ padding: '20px', textAlign: 'center', borderRadius: '8px', backgroundColor: '#ffffff', flex: 1 }}
        >
          <MoneyIcon style={{ fontSize: '60px', color: '#1976d2' }} />
          <Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Money Back Guaranteed
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your satisfaction is our priority. Get your money back if not satisfied.
          </Typography>
        </Paper>
      </Grid>

      {/* Third Column: Secure Payment */}
      <Grid item xs={12} sm={4} style={{ display: 'flex' }}>
        <Paper 
          elevation={4} 
          style={{ padding: '20px', margin: 'auto 0', textAlign: 'center', borderRadius: '8px', backgroundColor: '#ffffff', flex: 1 }}
        >
          <ContactlessIcon style={{ fontSize: '60px', color: '#1976d2' }} />
          <Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Super Secure Payment System
          </Typography>
          <Typography variant="body2" color="textSecondary">
            We use advanced encryption to ensure your payment is safe.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Services;









