import React from "react"
import Grid from "@mui/system/Unstable_Grid"
import Box from "@mui/system/Box"
import "./Product.css"
import Typography from "@mui/material/Typography"

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
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    marginTop: "12px",
  }

  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column">
      <div className="image-container" style={{ ...cntrStyle }} />

      <div style={productInfo}>
        <Typography gutterBottom>{props.type}</Typography>
        <Typography gutterBottom>{props.name}</Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography gutterBottom>{props.price}</Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="right">
            <Typography gutterBottom>{props.size}</Typography>
          </Grid>
        </Grid>
      </div>
    </Box>
  )
}

export default Product
