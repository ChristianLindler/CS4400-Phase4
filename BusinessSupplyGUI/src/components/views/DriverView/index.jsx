import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const DriverView = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/display_driver_view')
            .then(response => response.json())
            .then(data => setRows(data))
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    const columns = [
        { field: 'username', headerName: 'Username', width: 200 },
        { field: 'licenseID', headerName: 'Licence ID', width: 180 },
        { field: 'successful_trips', headerName: 'Successful Trips', width: 200 },
        { field: 'num_vans', headerName: 'Num Vans', width: 180 },
    ]

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid 
                rows={rows} 
                columns={columns} 
                pageSize={5} 
                getRowId={(row) => row.username}
            />
        </div>
    )
}

export default DriverView
