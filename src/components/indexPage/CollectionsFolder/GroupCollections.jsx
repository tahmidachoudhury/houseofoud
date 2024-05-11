import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import Collection from "./Collection";



function GroupProductSection(){
  return (
    <Grid container className="main">

      <Grid item xs={12} p={1} lg={4} md={6}>
        <Collection text='woody fragrances' url='bakhour.jpg' alt='oud in flower'/>
      </Grid>

      <Grid item xs={12} py={1} px={0.5} lg={4} md={6}>
        <Collection text='floral fragrances' url='floral.avif'/>
      </Grid>

      <Grid item xs={12} p={1} lg={4} md={12}> 
        <Collection text='fruity fragrances' url='blood_orange.avif'/>
      </Grid>

    </Grid>
  )
}

export default GroupProductSection;