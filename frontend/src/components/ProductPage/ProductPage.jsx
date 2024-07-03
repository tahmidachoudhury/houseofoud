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
import SizeButtons from "./SizeButtons"

const ColorButton = styled(Button)({
  color: "white",
  borderRadius: 0,
  backgroundColor: "white",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    backgroundColor: "white",
  },
  padding: 0,
})

const AddToCart = styled(Button)({
  width: "100%",
  height: "100%",
  padding: "8px",
  backgroundColor: "#990000",
  color: "white",
  "&:hover": {
    backgroundColor: "#660000", // Darker maroon red on hover
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
    getStagedItemQuantity,
    addTempItem,
    decreaseTempItem,
    confirmCartItem,
  } = useShoppingCart()
  const quantity = getStagedItemQuantity(id)

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
            <SizeButtons />
          </p>
          <Divider />
        </Box>
        <Box
          sx={{
            border: 1,
            display: "inline-block",
            borderRadius: "2rem",
            py: 1,
            my: 2,
            overflow: "hidden",
          }}
        >
          <ColorButton size="small" onClick={() => addTempItem(id)}>
            <AddIcon style={{ color: "black", fontSize: "0.8rem" }} />
          </ColorButton>
          <span style={{ fontSize: "12px" }}>{quantity}</span>
          <ColorButton onClick={() => decreaseTempItem(id)}>
            <RemoveIcon style={{ color: "black", fontSize: "0.7rem" }} />
          </ColorButton>
        </Box>
        <Box border={1} textAlign="center" borderRadius={1.8}>
          <AddToCart onClick={() => confirmCartItem(id)}>Add to cart</AddToCart>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductPage
