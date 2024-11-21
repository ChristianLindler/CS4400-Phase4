import React from 'react'
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import logo from '../../assets/gtlogo.png'

const Footer = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/ChristianLindler/CS4400-Phase4', '_blank')
  }

  return (
    <Box
      sx={{
        position: 'fixed', // Makes the footer fixed at the bottom
        bottom: 0,
        width: '100%', // Ensures it spans the full width
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: '#1A1F2F' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
          {/* Logo and Text */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img
              src={logo}
              alt="Company Logo"
              style={{
                height: 25,
                width: 'auto',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Arial, sans-serif',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Business Supply Dashboard
            </Typography>
          </Box>

          {/* GitHub Button */}
          <Button
            startIcon={<GitHubIcon />}
            onClick={handleGitHubClick}
            sx={{
              backgroundColor: '#1976D2',
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#1565C0',
              },
            }}
          >
            GitHub
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Footer
