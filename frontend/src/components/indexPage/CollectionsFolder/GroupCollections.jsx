import React from "react"
import Grid from "@mui/system/Unstable_Grid"
import Collection from "./Collection"
import "animate.css/animate.compat.css"
import ScrollAnimation from "react-animate-on-scroll"

function GroupProductSection() {
  return (
    <Grid container className="main">
      <Grid item xs={12} p={1} lg={4} md={6}>
        <ScrollAnimation animateIn="fadeIn">
          <Collection
            textPrimary=""
            textSecondary="Try our lighter fragrances"
            url="morrocan_ruby_on_wrist.jpg"
            alt="oud on wrist"
          />
        </ScrollAnimation>
      </Grid>

      <Grid item xs={12} py={1} px={0.5} lg={4} md={6}>
        <ScrollAnimation animateIn="fadeIn" duration={2}>
          <Collection textPrimary="" textSecondary="" url="two_in_hand.jpg" />
        </ScrollAnimation>
      </Grid>

      <Grid item xs={12} p={1} lg={4} md={12}>
        <ScrollAnimation animateIn="fadeIn" duration={3}>
          <Collection textPrimary="" textSecondary="" url="oud_on_hand.jpg" />
        </ScrollAnimation>
      </Grid>
    </Grid>
  )
}

export default GroupProductSection
