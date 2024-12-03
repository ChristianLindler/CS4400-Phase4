import React from 'react'
import { Grid } from '@mui/material'
import HireEmployeeForm from './HireEmployeeForm'
import FireEmployeeForm from './FireEmployeeForm'
import AddEmployeeForm from './AddEmployeeForm'
import AddOwnerForm from './AddOwnerForm'
import AddDriverRoleForm from './AddDriverRoleForm'
import AddWorkerRoleForm from './AddWorkerRoleForm'
import RemoveDriverRoleForm from './RemoveDriverRoleForm'

const RoleManager = () => {
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12}>
                <AddEmployeeForm/>
            </Grid>
            <Grid item xs={12}>
                <AddOwnerForm />
            </Grid>
            <Grid item xs={12}>
                <HireEmployeeForm />
            </Grid>
            <Grid item xs={12}>
                <FireEmployeeForm />
            </Grid>
            <Grid item xs={12}>
                <AddDriverRoleForm />
            </Grid>
            <Grid item xs={6}>
                <AddWorkerRoleForm />
            </Grid>
            <Grid item xs={6}>
                <RemoveDriverRoleForm />
            </Grid>
            
        </Grid>
    )
}
  
export default RoleManager