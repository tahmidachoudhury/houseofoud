import { Grid, Typography } from "@mui/material"
import { Box, color } from "@mui/system"
import React from "react"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material/styles"

const Montserrat = createTheme({
  typography: {
    fontFamily: ["Abel", "Montserrat", "Open Sans"].join(","),
  },
})

const Anton = createTheme({
  typography: {
    fontFamily: ["Bebas Neue", "Montserrat", "Open Sans"].join(","),
    fontSize: 20,
    color: "white",
  },
})

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
          <Box sx={{ textAlign: "center" }}>
            <ThemeProvider theme={Montserrat}>
              <Typography variant="h5">
                WE ARE LAUNCHING OUR WEBSITE SOON
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={Anton}>
              <Typography variant="h1">House of Oud</Typography>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
