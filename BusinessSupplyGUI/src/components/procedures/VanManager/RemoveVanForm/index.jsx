import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const RemoveVanForm = () => {
    const [vanId, setVanId] = useState('')
    const [tag, setTag] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitRemoveVan = async () => {
        if (vanId && tag) {
            try {
                const response = await fetch('http://localhost:5000/api/remove_van', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: vanId,
                        tag,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Van removed successfully!')
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
            <Typography variant="h6" gutterBottom>Remove Van</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="ID"
                        variant="outlined"
                        fullWidth
                        value={vanId}
                        onChange={(e) => setVanId(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Tag"
                        variant="outlined"
                        fullWidth
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitRemoveVan}>
                    Remove Van
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default RemoveVanForm
