import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const dummyData = [
  {
    id: 1,
    username: 'john_doe',
    taxIdentifier: '123456789',
    salary: 50000,
    hiringDate: '2022-01-15',
    experienceLevel: 'Mid',
    licenseId: 'L123',
    drivingExperience: '5 years',
    managerStatus: 'No',
  },
  {
    id: 2,
    username: 'jane_smith',
    taxIdentifier: '987654321',
    salary: 60000,
    hiringDate: '2020-03-10',
    experienceLevel: 'Senior',
    licenseId: 'L456',
    drivingExperience: '8 years',
    managerStatus: 'Yes',
  }
]

const columns = [
  { field: 'username', headerName: 'Username', width: 180 },
  { field: 'taxIdentifier', headerName: 'Tax Identifier', width: 180 },
  { field: 'salary', headerName: 'Salary', width: 150 },
  { field: 'hiringDate', headerName: 'Hiring Date', width: 180 },
  { field: 'experienceLevel', headerName: 'Experience Level', width: 180 },
  { field: 'licenseId', headerName: 'License Identifier', width: 180 },
  { field: 'drivingExperience', headerName: 'Driving Experience', width: 180 },
  { field: 'managerStatus', headerName: 'Manager Status', width: 180 },
]

const DataGridComponent = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={dummyData} columns={columns} pageSize={5} />
    </div>
  )
}

export default DataGridComponent
