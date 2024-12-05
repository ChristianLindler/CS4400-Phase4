import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const ManageServiceForm = () => {
    const [username, setUsername] = useState('')
    const [serviceId, setServiceId] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitManageService = async () => {
        if (username && serviceId) {
            try {
                const response = await fetch('http://localhost:5000/api/manage_service', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        id: serviceId, // Match the backend parameter name
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Service managed successfully!')
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
            <Typography variant="h6" gutterBottom>Manage Service</Typography>
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
                        label="ID"
                        variant="outlined"
                        fullWidth
                        value={serviceId}
                        onChange={(e) => setServiceId(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitManageService}>
                    Manage Service
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default ManageServiceForm
