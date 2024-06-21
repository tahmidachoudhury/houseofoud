import { Grid } from "@mui/material"
import { Box, color } from "@mui/system"
import React from "react"

export default function LandingPage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(
          "https://i.giphy.com/RAFOR6gbo1bEc.webp"
        )`,
        backgroundSize: "cover",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid item xs={3}>
          <Box sx={{ color: "black", fontSize: "1.5rem" }}>
            <h5>We are launching our website soon</h5>
            <h1>House of Oud</h1>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
