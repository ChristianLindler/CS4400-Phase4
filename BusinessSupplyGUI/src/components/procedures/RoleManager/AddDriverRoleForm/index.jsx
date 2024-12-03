import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const AddDriverRoleForm = () => {
    const [username, setUsername] = useState('')
    const [licenseID, setLicenseID] = useState('')
    const [licenseType, setLicenseType] = useState('')
    const [driverExperience, setDriverExperience] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitAddDriverRole = async () => {
        if (username && licenseID && licenseType && driverExperience) {
            try {
                const response = await fetch('http://localhost:5000/api/add_driver_role', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        licenseID,
                        license_type: licenseType,
                        driver_experience: driverExperience
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Driver role added successfully')
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
            <Typography variant="h6" gutterBottom>Add Driver Role</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="License ID"
                        variant="outlined"
                        fullWidth
                        value={licenseID}
                        onChange={(e) => setLicenseID(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="License Type"
                        variant="outlined"
                        fullWidth
                        value={licenseType}
                        onChange={(e) => setLicenseType(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Driver Experience (Years)"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={driverExperience}
                        onChange={(e) => setDriverExperience(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitAddDriverRole}>
                    Add Driver Role
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default AddDriverRoleForm
