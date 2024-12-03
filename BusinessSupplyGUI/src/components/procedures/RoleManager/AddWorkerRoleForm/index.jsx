import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const AddWorkerRoleForm = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitAddWorkerRole = async () => {
        if (username) {
            try {
                const response = await fetch('http://localhost:5000/api/add_worker_role', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Worker role added successfully')
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
            <Typography variant="h6" gutterBottom>Add Worker Role</Typography>
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
                <Button variant="contained" onClick={handleSubmitAddWorkerRole}>
                    Add Worker Role
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default AddWorkerRoleForm
