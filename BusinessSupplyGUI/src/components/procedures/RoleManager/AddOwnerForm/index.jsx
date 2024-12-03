import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const AddOwnerForm = () => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitAddOwner = async () => {
        if (username && firstName && lastName && address && birthdate) {
            try {
                const response = await fetch('http://localhost:5000/api/add_owner', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        first_name: firstName,
                        last_name: lastName,
                        address,
                        birthdate,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Owner added successfully')
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
            <Typography variant="h6" gutterBottom>Add Owner</Typography>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Birthdate"
                        variant="outlined"
                        fullWidth
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitAddOwner}>
                    Add Owner
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default AddOwnerForm
