import React, { useEffect, useState } from "react"
import Product from "../indexPage/BestSellerSection/Product"
import Typography from "@mui/material/Typography"
import allItems from "../../data/allItems.json"
import Box from "@mui/system/Box"
import { formatCurrency } from "../../utilities/formatCurrency"
import { Link } from "react-router-dom"
import { useLikedItems } from "../../context/LikedItemsContext"

export default function WishlistPage() {
  const { likedItems } = useLikedItems()
  return (
    <Box sx={{ padding: "22px 30px" }}>
      <Box textAlign="center" paddingTop={{ sm: "3rem" }} paddingBottom="1rem">
        <Typography variant="h4" gutterBottom>
          Wishlist
        </Typography>
      </Box>

      <Box
        display="grid"
        gap="32px"
        gridTemplateColumns={{
          xs: "repeat(2, minmax(0, 1fr))", // 3 columns on small screens
          lg: "repeat(4, minmax(0, 1fr))", // 4 columns on medium screens
        }}
      >
        {likedItems.map((product) => {
          return (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Box gridColumn={{ xs: "span 1", sm: "auto" }} key={product.id}>
                <Product
                  key={product.id}
                  url={product.id}
                  type={product.id}
                  name={product.id}
                  price={formatCurrency(product.id)}
                  size={product.id}
                />
              </Box>
            </Link>
          )
        })}
      </Box>
    </Box>
  )
}
