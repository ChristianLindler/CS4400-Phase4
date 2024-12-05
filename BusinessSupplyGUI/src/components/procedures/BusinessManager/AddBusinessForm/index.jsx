import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

const AddBusinessForm = () => {
    const [longName, setLongName] = useState('');
    const [rating, setRating] = useState('');
    const [spent, setSpent] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitAddBusiness = async () => {
        if (longName && rating && spent && location) {
            try {
                const response = await fetch('http://localhost:5000/api/add_business', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        long_name: longName,
                        rating: parseInt(rating),
                        spent: parseInt(spent),
                        location,
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    setMessage('Business added successfully!');
                } else {
                    setMessage(`Error: ${data.error || 'Unknown error'}`);
                }
            } catch (error) {
                setMessage('Error. Please try again later.');
                console.error('Error:', error);
            }
        } else {
            setMessage('Please fill in all fields.');
        }
    };

    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>Add Business</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        label="Long Name"
                        variant="outlined"
                        fullWidth
                        value={longName}
                        onChange={(e) => setLongName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Rating"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Spent"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={spent}
                        onChange={(e) => setSpent(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Location"
                        variant="outlined"
                        fullWidth
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitAddBusiness}>
                    Add Business
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    );
};

export default AddBusinessForm;
