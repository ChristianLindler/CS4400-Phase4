import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const DriveVanForm = () => {
    const [vanId, setVanId] = useState('')
    const [tag, setTag] = useState('')
    const [destination, setDestination] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitDriveVan = async () => {
        if (vanId && tag && destination) {
            try {
                const response = await fetch('http://localhost:5000/api/drive_van', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: vanId,
                        tag,
                        destination,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Van driven to destination successfully!')
                } else {
                    setMessage(`Error: ${data.error || 'Unknown error'}`)
                }
            } catch (error) {
                setMessage('Error. Please try again later.')
                console.error('Error:', error)
            }
        } else {
            setMessage('Please fill in all fields.')
        }
    }

    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>Drive Van</Typography>
            <Grid container spacing={2}>
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
                <Grid item xs={4}>
                    <TextField
                        label="Destination"
                        variant="outlined"
                        fullWidth
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitDriveVan}>
                    Drive Van
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default DriveVanForm
