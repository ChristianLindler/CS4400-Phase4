import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const AddVanForm = () => {
    const [vanId, setVanId] = useState('')
    const [tag, setTag] = useState('')
    const [fuel, setFuel] = useState('')
    const [capacity, setCapacity] = useState('')
    const [sales, setSales] = useState('')
    const [drivenBy, setDrivenBy] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitAddVan = async () => {
        if (vanId && tag && fuel && capacity && sales && drivenBy) {
            try {
                const response = await fetch('http://localhost:5000/api/add_van', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: vanId,
                        tag,
                        fuel,
                        capacity,
                        sales,
                        driven_by: drivenBy,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Van added successfully!')
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
            <Typography variant="h6" gutterBottom>Add Van</Typography>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <TextField
                        label="ID"
                        variant="outlined"
                        fullWidth
                        value={vanId}
                        onChange={(e) => setVanId(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Tag"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Fuel"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={fuel}
                        onChange={(e) => setFuel(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Capacity"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Sales"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={sales}
                        onChange={(e) => setSales(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Driven By"
                        variant="outlined"
                        fullWidth
                        value={drivenBy}
                        onChange={(e) => setDrivenBy(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitAddVan}>
                    Add Van
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default AddVanForm
