import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingTop: '20px' }}>
      <Box sx={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: 2 }}>
        <Typography variant="h3" gutterBottom color="primary">
          Welcome to the Business Supply Dashboard
        </Typography>
        <Typography variant="body1" paragraph>
          This platform allows you to manage and visualize key business processes efficiently. Choose a view or 
          procedure from the top navigation to begin interacting with the system.
        </Typography>
        <Typography variant="h6" gutterBottom>
          How to Use:
        </Typography>
        <Box component="ul" sx={{ textAlign: 'left', margin: '0 auto', maxWidth: '400px', padding: '0' }}>
          <Typography component="li" variant="body1" paragraph>
            Navigate to "Views" for different data displays like Employee View.
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Use "Procedures" to manage operations such as employee management and more.
          </Typography>
        </Box>
        <Typography variant="body2" paragraph sx={{ marginTop: '20px', fontStyle: 'italic' }}>
          This dashboard was made by Christian Lindler, Sebastian Stephens, Chance O'Donnell, and Owen Seibold.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;

