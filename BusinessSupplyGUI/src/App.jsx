import React, { useState } from 'react'
import Header from './components/Header'
import DisplayEmployeeView from './components/views/EmployeeView'
import ManageEmployees from './components/procedures/EmployeeManager'
import HomePage from './components/HomePage'
import { Paper } from '@mui/material'
import './App.css'

const App = () => {
  const [page, setPage] = useState('')

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage)
  }

  return (
    <div className="App">
      <Header page={page} onPageChange={handlePageChange} />

      <div style={{ padding: '20px', marginTop: '64px' }}>
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
          {page === 'manage-employees' && <ManageEmployees />}
        </Paper>
      </div>
    </div>
  )
}

export default App
