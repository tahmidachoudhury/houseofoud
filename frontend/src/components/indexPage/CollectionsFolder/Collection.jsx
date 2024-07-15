import { Typography } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
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
  const [isHovered, setIsHovered] = useState(false)

  const containerStyle = {
    width: "auto",
    height: "600px",
    backgroundImage: `url(${props.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "1.2s",
    position: "relative",
  }

  const image = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "0.7s",
    width: "auto",
    height: "600px",
  }

  const text = {
    textAlign: "left",
    fontSize: "2rem",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    color: "white",
    paddingLeft: "10px",
  }

  const imgContainer = {
    overflow: "hidden",
    zIndex: 0,
    position: "relative",
  }

  if (isHovered) {
    containerStyle.transform = "scale(1.05)"
  }

  return (
    <div
      style={imgContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={containerStyle}></div>
      <div style={text}>
        <ThemeProvider theme={TextPrimary}>
          <Typography variant="h3">{props.textPrimary}</Typography>
        </ThemeProvider>
        <ThemeProvider theme={TextSecondary}>
          <Typography variant="h3">{props.textSecondary}</Typography>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Collection
