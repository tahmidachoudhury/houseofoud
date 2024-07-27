import { Typography } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Box } from "@mui/system"
import React, { useState } from "react"

const TextPrimary = createTheme({
  typography: {
    fontFamily: ["Abel", "Montserrat", "Open Sans"].join(","),
  },
})

const TextSecondary = createTheme({
  typography: {
    fontFamily: ["Bebas Neue", "Montserrat", "Open Sans"].join(","),
    color: "white",
  },
})

function Collection(props) {
  const text = {
    textAlign: "left",
    fontSize: "2rem",
    position: "sticky",
    top: 0,
    zIndex: 1,
    color: "white",
    paddingLeft: "10px",
    background: "rgba(0, 0, 0, 0.5)",
  }

  const imgContainer = {
    zIndex: 0,
    position: "relative",
    width: "auto",
    height: "600px",
    backgroundImage: `url(${props.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <Box sx={imgContainer}>
      <Box sx={text}>
        <ThemeProvider theme={TextPrimary}>
          <Typography variant="h3">{props.textPrimary}</Typography>
        </ThemeProvider>
        <ThemeProvider theme={TextSecondary}>
          <Typography variant="h3">{props.textSecondary}</Typography>
        </ThemeProvider>
      </Box>
    </Box>
  )
}

export default Collection
