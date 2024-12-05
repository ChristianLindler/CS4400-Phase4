import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const OwnerView = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/display_owner_view')
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
        { field: 'first_name', headerName: 'First Name', width: 150 },
        { field: 'last_name', headerName: 'Last Name', width: 150 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'num_businesses', headerName: 'Num Businesses', width: 150 },
        { field: 'num_places', headerName: 'Num Places', width: 100 },
        { field: 'highs', headerName: 'Highs', width: 100 },
        { field: 'lows', headerName: 'Lows', width: 100 },
        { field: 'debt', headerName: 'Debt', width: 100 },
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

export default OwnerView
