import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import Collection from "./Collection";



function GroupProductSection(){
  return (
    <Grid container my={4} spacing={1}>

      <Grid item xs={12} lg={4} md={6}>
        <Collection text='woody fragrances' url='https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='oud in flower'/>
      </Grid>

      <Grid item xs={12} lg={4} md={6}>
        <Collection text='floral fragrances' url='https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </Grid>

      <Grid item xs={12} lg={4} md={12}> 
        <Collection text='fruity fragrances' url='https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </Grid>

    </Grid>
  )
}

export default GroupProductSection;