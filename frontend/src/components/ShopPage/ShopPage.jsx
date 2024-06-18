import React, { useEffect, useState } from "react"
import Product from "../indexPage/BestSellerSection/Product"
import Typography from "@mui/material/Typography"
import allItems from "../../data/allItems.json"
import Box from "@mui/system/Box"
import { formatCurrency } from "../../utilities/formatCurrency"
import { Link } from "react-router-dom"

function ShopPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const apiUrl = import.meta.env.VITE_PRODUCTS_API_URL
      try {
        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`)
        }

        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error)
        setError(error.message)
      }
    }

    fetchData()
  }, [])
  return (
    <Box sx={{ padding: "22px 30px" }}>
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
        {data.map((product, index) => {
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
          )
        })}
      </Box>
    </Box>
  )
}

export default ShopPage
