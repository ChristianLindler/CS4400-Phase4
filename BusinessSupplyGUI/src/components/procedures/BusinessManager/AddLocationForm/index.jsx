import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const AddLocationForm = () => {
    const [label, setLabel] = useState('')
    const [xCoord, setXCoord] = useState('')
    const [yCoord, setYCoord] = useState('')
    const [ipSpace, setIpSpace] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitAddLocation = async () => {
        if (label && xCoord && yCoord && ipSpace) {
            try {
                const response = await fetch('http://localhost:5000/api/add_location', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        label,
                        x_coord: xCoord,
                        y_coord: yCoord,
                        ip_space: ipSpace,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Location added successfully!')
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
            <Typography variant="h6" gutterBottom>Add Location</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        label="Label"
                        variant="outlined"
                        fullWidth
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="X Coordinate"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={xCoord}
                        onChange={(e) => setXCoord(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Y Coordinate"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={yCoord}
                        onChange={(e) => setYCoord(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Space"
                        variant="outlined"
                        fullWidth
                        value={ipSpace}
                        onChange={(e) => setIpSpace(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitAddLocation}>
                    Add Location
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default AddLocationForm
