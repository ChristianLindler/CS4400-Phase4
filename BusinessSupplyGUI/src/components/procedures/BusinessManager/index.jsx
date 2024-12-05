import React from 'react'
import { Grid } from '@mui/material'
import StartFundingForm from './StartFundingForm'
import ManageServiceForm from './ManageServiceForm'
import AddServiceForm from './AddServiceForm'
import AddLocationForm from './AddLocationForm'
import AddBusinessForm from './AddBusinessForm'

const BusinessManager = () => {
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12}>
                <StartFundingForm />
            </Grid>
            <Grid item xs={12}>
                <ManageServiceForm />
            </Grid>
            <Grid item xs={12}>
                <AddServiceForm />
            </Grid>
            <Grid item xs={12}>
                <AddLocationForm />
            </Grid>
            <Grid item xs={12}>
                <AddBusinessForm />
            </Grid>
        </Grid>
    )
}
  
export default BusinessManager