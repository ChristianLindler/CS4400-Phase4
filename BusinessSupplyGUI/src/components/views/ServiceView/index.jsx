import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const ServiceView = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/display_service_view')
            .then(response => response.json())
            .then(data => setRows(data))
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    const columns = [
        { field: 'service_id', headerName: 'Service ID', width: 80 },
        { field: 'service_name', headerName: 'Service Name', width: 230 },
        { field: 'home_base', headerName: 'Home Base', width: 150 },
        { field: 'manager', headerName: 'Manager', width: 200 },
        { field: 'revenue', headerName: 'Revenue', width: 150 },
        { field: 'products_carried', headerName: 'Products Carried', width: 150 },
        { field: 'cost_carried', headerName: 'Cost Carried', width: 150 },
        { field: 'weight_carried', headerName: 'Weight Carried', width: 150 },
    ]

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid 
                rows={rows} 
                columns={columns} 
                pageSize={5} 
                getRowId={(row) => row.service_id}
            />
        </div>
    )
}

export default ServiceView
