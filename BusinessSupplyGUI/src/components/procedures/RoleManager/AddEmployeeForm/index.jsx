import React, { useState } from 'react'
import { TextField, Button, Box, Grid, Typography } from '@mui/material'

const AddEmployeeForm = () => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [taxID, setTaxID] = useState('')
    const [hired, setHired] = useState('')
    const [employeeExperience, setEmployeeExperience] = useState('')
    const [salary, setSalary] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmitAddEmployee = async () => {
        if (username && firstName && lastName && address && birthdate && taxID && hired && employeeExperience && salary) {
            try {
                const response = await fetch('http://localhost:5000/api/add_employee', {
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
                        taxID,
                        hired,
                        employee_experience: employeeExperience,
                        salary
                    }),
                })

                const data = await response.json()

                if (response.ok) {
                    setMessage('Employee added successfully')
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
            <Typography variant="h6" gutterBottom>Add Employee</Typography>
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
                <Grid item xs={3}>
                    <TextField
                        label="Tax ID"
                        variant="outlined"
                        fullWidth
                        value={taxID}
                        onChange={(e) => setTaxID(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Hired Date"
                        variant="outlined"
                        fullWidth
                        type="date"
                        value={hired}
                        onChange={(e) => setHired(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Employee Experience (Years)"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={employeeExperience}
                        onChange={(e) => setEmployeeExperience(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Salary"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubmitAddEmployee}>
                    Add Employee
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }} color="textSecondary">{message}</Typography>}
        </Box>
    )
}

export default AddEmployeeForm
