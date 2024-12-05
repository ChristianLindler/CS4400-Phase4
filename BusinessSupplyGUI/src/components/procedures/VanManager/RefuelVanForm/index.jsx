import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const RefuelVanForm = () => {
    const [vanId, setVanId] = useState('')
    const [tag, setTag] = useState('')
    const [moreFuel, setMoreFuel] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitRefuelVan = async () => {
        if (vanId && tag && moreFuel) {
            try {
                const response = await fetch('http://localhost:5000/api/refuel_van', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: vanId,
                        tag,
                        more_fuel: moreFuel,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Van refueled successfully!')
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
            <Typography variant="h6" gutterBottom>Refuel Van</Typography>
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
                        label="More Fuel"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={moreFuel}
                        onChange={(e) => setMoreFuel(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitRefuelVan}>
                    Refuel Van
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default RefuelVanForm
