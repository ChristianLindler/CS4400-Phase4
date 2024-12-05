import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

const TakeoverVanForm = () => {
    const [username, setUsername] = useState('');
    const [vanId, setVanId] = useState('');
    const [tag, setTag] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitTakeoverVan = async () => {
        if (username && vanId && tag) {
            try {
                const response = await fetch('http://localhost:5000/api/takeover_van', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        id: vanId,
                        tag,
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    setMessage('Van takeover successful!');
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
            <Typography variant="h6" gutterBottom>Take Over Van</Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="ID"
                        variant="outlined"
                        fullWidth
                        value={vanId}
                        onChange={(e) => setVanId(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Tag"
                        variant="outlined"
                        fullWidth
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitTakeoverVan}>
                    Take Over Van
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    );
};

export default TakeoverVanForm;
