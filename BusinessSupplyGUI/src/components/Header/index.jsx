import React, { useState } from 'react'
import { AppBar, Toolbar, Button, Menu, MenuItem, Box, Typography, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

const Header = ({ page, onPageChange }) => {
  const [anchorElView, setAnchorElView] = useState(null)
  const [anchorElProcedure, setAnchorElProcedure] = useState(null)
  const [selectedView, setSelectedView] = useState('')
  const [selectedProcedure, setSelectedProcedure] = useState('')
  const openView = Boolean(anchorElView)
  const openProcedure = Boolean(anchorElProcedure)
  const handleClickView = (event) => {
    setAnchorElView(event.currentTarget)
  }

  const handleClickProcedure = (event) => {
    setAnchorElProcedure(event.currentTarget)
  }

  const handleCloseView = () => {
    setAnchorElView(null)
  }

  const handleCloseProcedure = () => {
    setAnchorElProcedure(null)
  }

  const handleViewSelection = (view) => {
    setSelectedView(view)
    handleCloseView()
    onPageChange(view)
  }

  const handleProcedureSelection = (procedure) => {
    setSelectedProcedure(procedure)
    handleCloseProcedure()
    onPageChange(procedure)
  }

  const handleHomeClick = () => {
    onPageChange('')
  }

  return (
    <Box>
      <AppBar position="sticky" sx={{ backgroundColor: '#1A1F2F' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'white' }}>
            Business Supply Dashboard
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Button to open the View dropdown */}
            <Button
              aria-controls={openView ? 'view-menu' : undefined}
              aria-haspopup="true"
              onClick={handleClickView}
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
              Views
            </Button>

            {/* View Dropdown */}
            <Menu
              id="view-menu"
              anchorEl={anchorElView}
              open={openView}
              onClose={handleCloseView}
            >
              <MenuItem onClick={() => handleViewSelection('employee-view')}>Employee View</MenuItem>
              <MenuItem onClick={() => handleViewSelection('driver-view')}>Driver View</MenuItem>
              <MenuItem onClick={() => handleViewSelection('location-view')}>Location View</MenuItem>
              <MenuItem onClick={() => handleViewSelection('owner-view')}>Owner View</MenuItem>
              <MenuItem onClick={() => handleViewSelection('product-view')}>Product View</MenuItem>
              <MenuItem onClick={() => handleViewSelection('service-view')}>Service View</MenuItem>

            </Menu>

            {/* Button to open the Procedure dropdown */}
            <Button
              aria-controls={openProcedure ? 'procedure-menu' : undefined}
              aria-haspopup="true"
              onClick={handleClickProcedure}
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
              Procedures
            </Button>

            {/* Procedure Dropdown */}
            <Menu
              id="procedure-menu"
              anchorEl={anchorElProcedure}
              open={openProcedure}
              onClose={handleCloseProcedure}
            >
              <MenuItem onClick={() => handleProcedureSelection('role-manager')}>Manage Roles</MenuItem>
              <MenuItem onClick={() => handleProcedureSelection('product-manager')}>Manage Products</MenuItem>
              <MenuItem onClick={() => handleProcedureSelection('business-manager')}>Manage Businesses</MenuItem>
              <MenuItem onClick={() => handleProcedureSelection('van-manager')}>Manage Vans</MenuItem>

            </Menu>

            <IconButton color="inherit" onClick={handleHomeClick} sx={{ mr: 2 }}>
              <HomeIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
