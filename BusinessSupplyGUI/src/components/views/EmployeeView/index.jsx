import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const EmployeeView = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/display_employee_view')
            .then(response => response.json())
            .then(data => {
                const dataWithIds = data.map((row, index) => ({
                    id: index + 1,
                    ...row
                }));
                setRows(dataWithIds);
            })
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    const columns = [
        { field: 'username', headerName: 'Username', width: 120 },
        { field: 'taxID', headerName: 'Tax Identifier', width: 120 },
        { field: 'salary', headerName: 'Salary', width: 80 },
        { field: 'hired', headerName: 'Hiring Date', width: 200 },
        { field: 'employee_experience', headerName: 'Experience Level', width: 140 },
        { field: 'licenseID', headerName: 'License Identifier', width: 140 },
        { field: 'driving_experience', headerName: 'Driving Experience', width: 140 },
        { field: 'manager_status', headerName: 'Manager Status', width: 150 },
    ]

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid 
                rows={rows} 
                columns={columns} 
                pageSize={5} 
            />
        </div>
    )
}

export default EmployeeView
