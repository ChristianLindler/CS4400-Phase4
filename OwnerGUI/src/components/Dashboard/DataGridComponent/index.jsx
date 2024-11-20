import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const OwnerDashboard = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/display_employee_view')
            .then(response => response.json())
            .then(data => setRows(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const columns = [
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'taxID', headerName: 'Tax Identifier', width: 180 },
        { field: 'salary', headerName: 'Salary', width: 150 },
        { field: 'hired', headerName: 'Hiring Date', width: 180 },
        { field: 'employee_experience', headerName: 'Experience Level', width: 180 },
        { field: 'licenseID', headerName: 'License Identifier', width: 200 },
        { field: 'driving_experience', headerName: 'Driving Experience', width: 200 },
        { field: 'manager_status', headerName: 'Manager Status', width: 150 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid 
                rows={rows} 
                columns={columns} 
                pageSize={5} 
                getRowId={(row) => row.username}
            />
        </div>
    );
};

export default OwnerDashboard;
