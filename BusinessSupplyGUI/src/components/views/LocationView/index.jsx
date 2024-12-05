import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const LocationView = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/display_location_view')
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
        { field: 'label', headerName: 'Label', width: 120 },
        { field: 'long_name', headerName: 'Long Name', width: 200 },
        { field: 'x_coord', headerName: 'X Coord', width: 80 },
        { field: 'y_coord', headerName: 'Y Coord', width: 80 },
        { field: 'space', headerName: 'Space', width: 100 },
        { field: 'num_vans', headerName: 'Num Vans', width: 140 },
        { field: 'van_ids', headerName: 'Van Ids', width: 300 },
        { field: 'remaining_capacity', headerName: 'Remaining Capacity', width: 150 },
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

export default LocationView
