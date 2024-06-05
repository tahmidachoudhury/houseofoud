import React from "react";
import Product from "../indexPage/BestSellerSection/Product";
import Typography from "@mui/material/Typography";
import allItems from "../../data/allItems";
import Box from "@mui/system/Box";
import { formatCurrency } from "../../utilities/formatCurrency";
import { Link } from "react-router-dom";

function ShopPage() {
  return (
    <Box sx={{ marginTop: "64px", padding: "22px 30px" }}>
      <Box textAlign="center" paddingTop="3rem" paddingBottom="1rem">
        <Typography variant="h4" gutterBottom>
          All Fragrances
        </Typography>
      </Box>

      <Box
        display="grid"
        gap="32px"
        gridTemplateColumns={{
          xs: "repeat(2, minmax(0, 1fr))", // 3 columns on small screens
          md: "repeat(4, minmax(0, 1fr))", // 4 columns on medium screens
        }}
      >
        {allItems.map((product, index) => {
          return (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Box
                gridColumn={{ xs: "span 1", sm: "auto" }}
                sx={{ aspectRatio: "1/1" }}
                key={index}
              >
                <Product
                  key={product.id}
                  url={product.url}
                  type={product.type}
                  name={product.name}
                  price={formatCurrency(product.price)}
                  size={product.size}
                />
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default ShopPage;
