import React from "react"
import Grid from "@mui/system/Unstable_Grid"
import Box from "@mui/system/Box"
import Typography from "@mui/material/Typography"
import { themeOptions } from "../../../themes/Theme"
import { ThemeProvider } from "@mui/material"

function Product(props) {
  const cntrStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${props.url})`,
    overflow: "hidden",
    aspectRatio: "1/1",
  }

  const productInfo = {
    padding: "15px 0 ",
  }

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      sx={{ pr: 2, pb: 5 }}
    >
      <div className="image-container" style={{ ...cntrStyle }} />

      <div style={productInfo}>
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
      </div>
    </Box>
  )
}

export default Product
