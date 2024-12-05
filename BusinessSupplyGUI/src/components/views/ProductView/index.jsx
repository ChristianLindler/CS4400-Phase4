import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const ProductView = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/display_product_view')
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
        { field: 'product_name', headerName: 'Product Name', width: 200 },
        { field: 'location', headerName: 'Location', width: 180 },
        { field: 'amount_available', headerName: 'Amount Available', width: 150 },
        { field: 'low_price', headerName: 'Low Price', width: 200 },
        { field: 'high_price', headerName: 'High Price', width: 150 },
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

export default ProductView
