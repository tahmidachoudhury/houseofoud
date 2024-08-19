import React from "react"
import Grid from "@mui/system/Unstable_Grid"
import Box from "@mui/system/Box"
import Typography from "@mui/material/Typography"
import { themeOptions } from "../../../themes/Theme"
import { ThemeProvider } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Link } from "react-router-dom"

function Product(props) {
  const cntrStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${props.url})`,
    overflow: "hidden",
    aspectRatio: "3/4",
  }

  return (
    <Box position="relative" zIndex={1}>
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        position="relative"
        zIndex={0}
      >
        <Link to={`/product/${props.link}`} key={props.link}>
          <div className="image-container" style={{ ...cntrStyle }} />
        </Link>

        <Box py="15px">
          <ThemeProvider theme={themeOptions}>
            <Typography gutterBottom>{props.type}</Typography>
            <Typography variant="body2" gutterBottom>
              {props.name}
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <Typography gutterBottom>{props.price}</Typography>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="right">
                <Typography gutterBottom>{props.size}</Typography>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  )
}

export default Product
