import Carousel from "react-multi-carousel"
import React from "react"
import "react-multi-carousel/lib/styles.css"
import Product from "./Product.jsx"
import Box from "@mui/system/Box"
import BestSellingProducts from "../../../data/bestSellingData.js"

function BestSellingProductsSection() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  }

  const h2Style = {
    textAlign: "center",
  }

  return (
    <div>
      <h2 style={h2Style}>Best Sellers</h2>
      <Box px={1}>
        <Carousel
          responsive={responsive}
          arrows={false}
          centerMode={false}
          draggable
          infinite
          showDots={true}
          dotListClass=""
        >
          {BestSellingProducts.map((product, index) => {
            return (
              <Box sx={{ p: 1 }}>
                <Product
                  key={index}
                  link={product.link}
                  url={product.url}
                  type={product.type}
                  name={product.name}
                  price={product.price}
                  size={product.size}
                />
              </Box>
            )
          })}
        </Carousel>
      </Box>
    </div>
  )
}

export default BestSellingProductsSection
