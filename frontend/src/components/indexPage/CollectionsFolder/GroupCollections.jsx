import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import Collection from "./Collection";
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';





function GroupProductSection(){
  return (
    <Grid container className="main">

        <Grid item xs={12} p={1} lg={4} md={6}>
          <ScrollAnimation animateIn="fadeIn">
            <Collection text='woody fragrances' url='bakhour.jpg' alt='oud in flower'/>
          </ScrollAnimation>
        </Grid>


      <Grid item xs={12} py={1} px={0.5} lg={4} md={6}>
        <ScrollAnimation animateIn="fadeIn" duration={2}> 
          <Collection text='floral fragrances' url='floral.avif'/>
        </ScrollAnimation>
      </Grid>

      <Grid item xs={12} p={1} lg={4} md={12}> 
        <ScrollAnimation animateIn="fadeIn" duration={3}>
          <Collection text='fruity fragrances' url='blood_orange.avif'/>
        </ScrollAnimation>
      </Grid>

    </Grid>
  )
}

export default GroupProductSection;