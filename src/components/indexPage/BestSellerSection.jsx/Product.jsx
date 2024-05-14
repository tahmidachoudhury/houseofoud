import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import "./Product.css";
import Typography from "@mui/material/Typography"


function Product(props){
  const cntrStyle = {
    width: 'auto',
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${props.url})`,
  };

  const productInfo = {
    padding: "12px 0",
    borderTop: "2px solid black",
    borderBottom: "2px solid black",
    marginTop: "12px"
  }

  return (

    <Box p={1}>

      <div className="image-container">
        <div className='img' style={{...cntrStyle}}></div>
      </div>
      
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


export default Product;