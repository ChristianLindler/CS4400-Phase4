import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const AddProductForm = () => {
    const [barcode, setBarcode] = useState('')
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitAddProduct = async () => {
        if (barcode && name && weight) {
            try {
                const response = await fetch('http://localhost:5000/api/add_product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        barcode,
                        name,
                        weight,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Product added successfully')
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
            <Typography variant="h6" gutterBottom>Add Product</Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        label="Barcode"
                        variant="outlined"
                        fullWidth
                        value={barcode}
                        onChange={(e) => setBarcode(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Product Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Weight (kg)"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitAddProduct}>
                    Add Product
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default AddProductForm
