import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const AddServiceForm = () => {
    const [serviceId, setServiceId] = useState('')
    const [longName, setLongName] = useState('')
    const [homeBase, setHomeBase] = useState('')
    const [manager, setManager] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitAddService = async () => {
        if (serviceId && longName && homeBase && manager) {
            try {
                const response = await fetch('http://localhost:5000/api/add_service', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: serviceId,
                        long_name: longName,
                        home_base: homeBase,
                        manager: manager,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Service added successfully!')
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
            <Typography variant="h6" gutterBottom>Add Service</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        label="ID"
                        variant="outlined"
                        fullWidth
                        value={serviceId}
                        onChange={(e) => setServiceId(e.target.value)}
                    />
                </Grid>
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
                        label="Home Base"
                        variant="outlined"
                        fullWidth
                        value={homeBase}
                        onChange={(e) => setHomeBase(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Manager"
                        variant="outlined"
                        fullWidth
                        value={manager}
                        onChange={(e) => setManager(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitAddService}>
                    Add Service
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default AddServiceForm
