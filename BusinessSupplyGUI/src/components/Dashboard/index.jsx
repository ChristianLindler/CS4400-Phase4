import React from 'react'
import DataGridComponent from './DataGridComponent'
import HireFireForm from './HireFireForm'
import { Container, Typography, Box } from '@mui/material'

const Dashboard = () => {

  const handleHire = (username, id) => {
    console.log(`Hiring: Username: ${username}, ID: ${id}`)
  }

  const handleFire = (username, id) => {
    console.log(`Firing: Username: ${username}, ID: ${id}`)
  }

  return (
    <Container>
      <Box sx={{ my: 3 }}>
        <HireFireForm onHire={handleHire} onFire={handleFire} />
        <DataGridComponent />
      </Box>
    </Container>
  )
}

export default Dashboard
