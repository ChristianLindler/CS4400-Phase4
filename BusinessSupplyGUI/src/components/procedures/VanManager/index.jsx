import React from 'react'
import { Grid } from '@mui/material'
import TakeoverVanForm from './TakeoverVanForm'
import RemoveVanForm from './RemoveVanForm'
import RefuelVanForm from './RefuelVanForm'
import LoadVanForm from './LoadVanForm'
import DriveVanForm from './DriveVanForm'
import AddVanForm from './AddVanForm'

const VanManager = () => {
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12}>
                <TakeoverVanForm />
            </Grid>
            <Grid item xs={12}>
                <RemoveVanForm />
            </Grid>
            <Grid item xs={12}>
                <RefuelVanForm />
            </Grid>
            <Grid item xs={12}>
                <LoadVanForm />
            </Grid>
            <Grid item xs={12}>
                <DriveVanForm />
            </Grid>
            <Grid item xs={12}>
                <AddVanForm />
            </Grid>
        </Grid>
    )
}
  
export default VanManager