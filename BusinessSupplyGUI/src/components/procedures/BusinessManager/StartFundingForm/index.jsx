import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const StartFundingForm = () => {
    const [owner, setOwner] = useState('')
    const [amount, setAmount] = useState('')
    const [longName, setLongName] = useState('')
    const [fundDate, setFundDate] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitStartFunding = async () => {
        if (owner && amount && longName && fundDate) {
            try {
                const response = await fetch('http://localhost:5000/api/start_funding', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        owner,
                        amount: parseFloat(amount), // Convert amount to a number
                        long_name: longName,
                        fund_date: fundDate,
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Funding started successfully!')
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
            <Typography variant="h6" gutterBottom>Start Funding</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        label="Owner"
                        variant="outlined"
                        fullWidth
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Amount"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Long Name"
                        variant="outlined"
                        fullWidth
                        value={longName}
                        onChange={(e) => setLongName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Fund Date"
                        variant="outlined"
                        fullWidth
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={fundDate}
                        onChange={(e) => setFundDate(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitStartFunding}>
                    Start Funding
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default StartFundingForm
