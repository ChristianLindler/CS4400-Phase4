import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

const HireFireForm = ({ onHire, onFire }) => {
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');

  const handleSubmitHire = () => {
    if (username && id) {
      onHire(username, id);
    }
  };

  const handleSubmitFire = () => {
    if (username && id) {
      onFire(username, id);
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>Hire or Fire an Employee</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Employee ID"
            variant="outlined"
            fullWidth
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={handleSubmitHire} sx={{ mr: 2 }}>
          Hire Employee
        </Button>
        <Button variant="contained" onClick={handleSubmitFire}>
          Fire Employee
        </Button>
      </Box>
    </Box>
  );
};

export default HireFireForm;
