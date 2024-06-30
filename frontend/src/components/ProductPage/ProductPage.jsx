import React, { useEffect, useState } from "react"
import allItems from "../../data/allItems.json"
import { useParams } from "react-router-dom"
import Box from "@mui/system/Box"
import { formatCurrency } from "../../utilities/formatCurrency"
import { Button, Divider } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { styled } from "@mui/material/styles"
import SizeButton from "./SizeButtons"

const ColorButton = styled(Button)({
  color: "white",
  borderRadius: 0,
  backgroundColor: "white",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    backgroundColor: "white",
  },
})

function ProductPage() {
  const [data, setData] = useState([])
  const { id } = useParams()

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

  const product = data.find((item) => item.id.toString() === id)

  if (!product) {
    return (
      <Box sx={{ marginTop: "64px", padding: "22px 30px" }}>
        this doesn't exist
      </Box>
    )
  }

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      mt={{ xs: "58px", md: "0" }}
    >
      <Box
        component="img"
        src={`../../../../public/${product.url}`}
        sx={{
          width: { xs: "100vw", md: "50vw" },
          px: { xs: "3%", md: 0 },
          height: "100%",
          objectFit: "cover",

          borderRadius: { xs: "2.2rem", md: 0 },
        }}
      />
      <Box sx={{ padding: "10% 10%" }}>
        <Box>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <Divider />
          <p>Type: {product.type}</p>
          <Divider />
          <p>{formatCurrency(product.price)}</p>
          <p>
            Size:
            <SizeButton size="6ml" />
            <SizeButton size="12ml" />
            <SizeButton size="15ml" />
          </p>
          <Divider />
        </Box>
        <Box
          sx={{
            border: 1,
            display: "inline-block",
            borderRadius: "2rem",
            p: 0.8,
            my: 2,
          }}
        >
          <ColorButton
            size="small"
            onClick={() => increaseCartQuantity(id)}
            sx={{ borderRadius: "2rem" }}
          >
            <AddIcon style={{ color: "black", fontSize: "1rem" }} />
          </ColorButton>
          <span style={{ fontSize: "12px" }}>{quantity}</span>
          <ColorButton
            onClick={() => decreaseCartQuantity(id)}
            sx={{ borderRadius: "2rem" }}
          >
            <RemoveIcon style={{ color: "black", fontSize: "1rem" }} />
          </ColorButton>
        </Box>
        <Box border={1} textAlign="center" py={1} borderRadius={1.8}>
          Add to cart
        </Box>
      </Box>
    </Box>
  )
}

export default ProductPage
