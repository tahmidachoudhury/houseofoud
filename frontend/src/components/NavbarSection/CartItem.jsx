import React, { useEffect, useState } from "react"
import allItems from "../../data/allItems.json"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { Box, Stack, styled } from "@mui/system"
import { formatCurrency } from "../../utilities/formatCurrency"
import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

const ColorButton = styled(Button)({
  color: "white",
  borderRadius: 0,
  backgroundColor: "inherit",
  boxShadow: "none",
  p: 0,
  "&:hover": {
    boxShadow: "none",
    backgroundColor: "inherit",
  },
  width: "2.5rem",
})

export function CartItem(props) {
  const [data, setData] = useState([])
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart()

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

  const item = data.find((i) => i.id === Number(props.id))
  if (item == null) return null

  return (
    <Stack direction="horizontal" display="flex" flex={1} gap={2}>
      <img
        src={`/${item.url}`}
        style={{ width: "125px", height: "125px", objectFit: "cover" }}
      />
      <Box
        flex={3}
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        my={1}
      >
        <Box>{item.name}</Box>
        <Box>{props.size}</Box>
        <Box>{formatCurrency(props.price)}</Box>
        <Box>
          <Box sx={{ border: 1, display: "inline-block" }}>
            <ColorButton
              onClick={() =>
                increaseCartQuantity(props.id, props.size, props.price)
              }
            >
              <AddIcon
                style={{ color: "black", fontSize: "0.8rem", padding: 0 }}
              />
            </ColorButton>
            <span>{props.quantity}</span>
            <ColorButton
              onClick={() =>
                decreaseCartQuantity(props.id, props.size, props.price)
              }
            >
              <RemoveIcon style={{ color: "black", fontSize: "0.8rem" }} />
            </ColorButton>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-evenly">
        <Box textAlign="center">
          {formatCurrency(props.price * props.quantity)}
        </Box>

        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id, props.size, props.price)}
        >
          Remove
        </Button>
      </Box>
    </Stack>
  )
}
