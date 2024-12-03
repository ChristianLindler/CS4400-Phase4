import React from 'react'
import { Grid } from '@mui/material'
import PurchaseProductForm from './PurchaseProductForm'
import RemoveProductForm from './RemoveProductForm'
import AddProductForm from './AddProductForm'

const ProductManager = () => {
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12}>
                <AddProductForm />
            </Grid>
            <Grid item xs={12}>
                <RemoveProductForm />
            </Grid>
            <Grid item xs={12}>
                <PurchaseProductForm />
            </Grid>
        </Grid>
    )
}
  
export default ProductManager