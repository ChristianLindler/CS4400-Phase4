import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import DisplayEmployeeView from './components/views/EmployeeView'
import DisplayDriverView from './components/views/DriverView'
import DisplayLocationView from './components/views/LocationView'
import DisplayOwnerView from './components/views/OwnerView'
import DisplayProductView from './components/views/ProductView'
import DisplayServiceView from './components/views/ServiceView'

import RoleManager from './components/procedures/RoleManager'
import ProductManager from './components/procedures/ProductManager'
import BusinessManager from './components/procedures/BusinessManager'

import HomePage from './components/HomePage'
import { Paper } from '@mui/material'
import './App.css'
import VanManager from './components/procedures/VanManager'

const App = () => {
  const [page, setPage] = useState('')

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage)
  }

  return (
    <div className="App">
      <Header page={page} onPageChange={handlePageChange} />

      <div style={{ padding: '20px', marginTop: '64px', flexGrow: 1 }}>
        <Paper 
          sx={{
            backgroundColor: 'white',
            padding: '20px',
            elevation: 8,
            borderRadius: '8px',
          }}
        >
          {page === '' && <HomePage />}
          {page === 'employee-view' && <DisplayEmployeeView />}
          {page === 'driver-view' && <DisplayDriverView />}
          {page === 'location-view' && <DisplayLocationView />}
          {page === 'owner-view' && <DisplayOwnerView />}
          {page === 'product-view' && <DisplayProductView />}
          {page === 'service-view' && <DisplayServiceView />}

          {page === 'role-manager' && <RoleManager />}
          {page === 'product-manager' && <ProductManager />}
          {page === 'business-manager' && <BusinessManager />}
          {page === 'van-manager' && <VanManager />}
        </Paper>
      </div>
      <Footer/>
    </div>
  )
}

export default App
