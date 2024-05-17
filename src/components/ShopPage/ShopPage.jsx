import React from "react";
import Product from "../indexPage/BestSellerSection/Product";
import Grid from '@mui/system/Unstable_Grid';
import BestSellingProducts from "../indexPage/BestSellerSection/bestSellingData";
import Box from "@mui/system/Box";




function ShopPage(){
  return (
    <Box sx={{marginTop: '64px', padding: '22px 30px'}}>
        <Box display="grid" gap="32px" gridTemplateColumns={{
            xs: 'repeat(2, minmax(0, 1fr))', // 3 columns on small screens
            md: 'repeat(4, minmax(0, 1fr))', // 4 columns on medium screens
        }}>

          {BestSellingProducts.map((product, index) => {
            return <Box gridColumn={ {xs: 'span 1', sm: 'auto'} } sx={{aspectRatio: '1/1'}} key={index} > 
              <Product 
                key={index}
                url={product.url}
                type={product.type}
                name={product.name}
                price={product.price}
                size={product.size}
              />
            </Box>
          })}


        </Box>
    </Box>
  )
}

export default ShopPage;