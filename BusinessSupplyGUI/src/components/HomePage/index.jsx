import React from 'react'
import { Box, Typography, Container } from '@mui/material'

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingTop: '20px' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to the Business Supply Dashboard
        </Typography>
        <Typography variant="body1" paragraph>
          This platform allows you to manage and visualize key business processes efficiently. Choose a view or procedure from the top navigation to begin interacting with the system.
        </Typography>
        <Typography variant="body1" paragraph>
          The dashboard is designed to offer comprehensive insights and control over employee data, vans, and more.
        </Typography>
        <Typography variant="h6" paragraph>
          How to Use:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">Navigate to "Views" for different data displays like Employee View.</Typography>
          </li>
          <li>
            <Typography variant="body1">Use "Procedures" to manage operations such as employee management and more.</Typography>
          </li>
        </ul>
        <Typography variant="body1" paragraph>
          This dashboard was made by Christian Lindler, Sebastian Stephens, Chance ODonnell, and Owen Seibold
        </Typography>
      </Box>
    </Container>
  )
}

export default HomePage

