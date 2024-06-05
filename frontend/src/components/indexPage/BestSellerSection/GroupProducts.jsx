import Carousel from "react-multi-carousel";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product.jsx";
import Box from "@mui/system/Box";
import BestSellingProducts from "../../../data/bestSellingData.js";

function BestSellingProductsSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const h2Style = {
    textAlign: "center",
  };

  return (
    <div>
      <h2 style={h2Style}>Best Sellers</h2>
      <Box px={1}>
        <Carousel responsive={responsive} arrows={false}>
          {BestSellingProducts.map((product, index) => {
            return (
              <Product
                key={index}
                url={product.url}
                type={product.type}
                name={product.name}
                price={product.price}
                size={product.size}
              />
            );
          })}
        </Carousel>
      </Box>
    </div>
  );
}

export default BestSellingProductsSection;
