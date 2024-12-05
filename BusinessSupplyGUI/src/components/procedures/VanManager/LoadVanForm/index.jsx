import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const LoadVanForm = () => {
    const [vanId, setVanId] = useState('')
    const [tag, setTag] = useState('')
    const [barcode, setBarcode] = useState('')
    const [morePackages, setMorePackages] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitLoadVan = async () => {
        if (vanId && tag && barcode && morePackages && price) {
            try {
                const response = await fetch('http://localhost:5000/api/load_van', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: vanId,
                        tag,
                        barcode,
                        more_packages: morePackages,
                        price,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Van loaded successfully!')
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
            <Typography variant="h6" gutterBottom>Load Van</Typography>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <TextField
                        label="Van ID"
                        variant="outlined"
                        fullWidth
                        value={vanId}
                        onChange={(e) => setVanId(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Tag"
                        variant="outlined"
                        fullWidth
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
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
                        label="Number of Packages"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={morePackages}
                        onChange={(e) => setMorePackages(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Price per Package"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitLoadVan}>
                    Load Van
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default LoadVanForm
