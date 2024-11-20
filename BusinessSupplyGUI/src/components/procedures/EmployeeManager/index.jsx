import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

const EmployeeManager = () => {
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitHire = async () => {
    if (username && id) {
      try {
        const response = await fetch('http://localhost:5000/api/hire_employee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, id: id }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          setMessage('Employee hired successfully');
        } else {
          setMessage(`Error: ${data.error || 'Unknown error'}`);
        }
      } catch (error) {
        setMessage('Network error. Please try again later.');
        console.error('Error:', error);
      }
    } else {
      setMessage('Please fill in both fields.');
    }
  };

  const handleSubmitFire = async () => {
    if (username && id) {
      try {
        const response = await fetch('http://localhost:5000/api/fire_employee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, id: id }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          setMessage('Employee fired successfully');
        } else {
          setMessage(`Error: ${data.error || 'Unknown error'}`);
        }
      } catch (error) {
        setMessage('Network error. Please try again later.');
        console.error('Error:', error);
      }
    } else {
      setMessage('Please fill in both fields.');
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
      {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
    </Box>
  );
};

export default EmployeeManager
