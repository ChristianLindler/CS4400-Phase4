import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const RemoveDriverRoleForm = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitRemoveDriverRole = async () => {
        if (username) {
            try {
                const response = await fetch('http://localhost:5000/api/remove_driver_role', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Driver role removed successfully')
                } else {
                    setMessage(`Error: ${data.error || 'Unknown error'}`)
                }
            } catch (error) {
                setMessage('Error. Please try again later.')
                console.error('Error:', error)
            }
        } else {
            setMessage('Please fill in the username.')
        }
    }

    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>Remove Driver Role</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitRemoveDriverRole}>
                    Remove Driver Role
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default RemoveDriverRoleForm
