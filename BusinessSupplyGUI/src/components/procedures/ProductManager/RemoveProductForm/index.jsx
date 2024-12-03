import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const RemoveProductForm = () => {
    const [barcode, setBarcode] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitRemove = async () => {
        if (barcode) {
            try {
                const response = await fetch('http://localhost:5000/api/remove_product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        barcode,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Product removed successfully')
                } else {
                    setMessage(`Error: ${data.error || 'Unknown error'}`)
                }
            } catch (error) {
                setMessage('Error. Please try again later.')
                console.error('Error:', error)
            }
        } else {
            setMessage('Please provide a barcode.')
        }
    }

    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>Remove Product</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Barcode"
                        variant="outlined"
                        fullWidth
                        value={barcode}
                        onChange={(e) => setBarcode(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitRemove}>
                    Remove Product
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default RemoveProductForm
