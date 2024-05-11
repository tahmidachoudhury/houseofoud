import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import "./Product.css";


function Product(props){
  const cntrStyle = {
    width: 'auto',
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${props.url})`,
  };

  return (

    <Box p={1}>

      <div className="image-container">
        <div className='img' style={{...cntrStyle}}></div>
      </div>
      
      <div className="txt">
        <div>{props.type}</div>
        <div>{props.name}</div>
        <Grid container>
          <Grid item xs={6}>{props.price}</Grid>
          <Grid item xs={6} display="flex" justifyContent="right">{props.size}</Grid>
        </Grid>
      </div>

    </Box>
  )
}


export default Product;