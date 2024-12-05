import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const FireEmployeeForm = () => {
    const [username, setUsername] = useState('')
    const [id, setId] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitFire = async () => {
        if (username && id) {
            try {
                const response = await fetch('http://localhost:5000/api/fire_employee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, id }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Employee fired successfully')
                } else {
                    setMessage(`Error: ${data.error || 'Unknown error'}`)
                }
            } catch (error) {
                setMessage('Error. Please try again later.')
                console.error('Error:', error)
            }
        } else {
            setMessage('Please fill in both fields.')
        }
    }

    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>Fire an Employee</Typography>
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
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitFire}>
                    Fire Employee
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default FireEmployeeForm