import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const PurchaseProductForm = () => {
    const [longName, setLongName] = useState('')
    const [productId, setProductId] = useState('')
    const [tag, setTag] = useState('')
    const [barcode, setBarcode] = useState('')
    const [quantity, setQuantity] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitPurchase = async () => {
        if (longName && productId && tag && barcode && quantity) {
            try {
                const response = await fetch('http://localhost:5000/api/purchase_product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        long_name: longName,
                        id: productId,
                        tag,
                        barcode,
                        quantity,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Product purchased successfully')
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
            <Typography variant="h6" gutterBottom>Purchase Product</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        label="Long Name"
                        variant="outlined"
                        fullWidth
                        value={longName}
                        onChange={(e) => setLongName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Product ID"
                        variant="outlined"
                        fullWidth
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Tag"
                        variant="outlined"
                        fullWidth
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Barcode"
                        variant="outlined"
                        fullWidth
                        value={barcode}
                        onChange={(e) => setBarcode(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Quantity"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitPurchase}>
                    Purchase Product
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default PurchaseProductForm
