import { Button, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import React from "react"
import { useShoppingCart } from "../../context/ShoppingCartContext"

const SuccessPage = () => {
  const { setCartItems } = useShoppingCart()
  setCartItems([])
  return (
    <Box
      display="flex"
      justifyContent="left"
      my={{ xs: "10px", sm: "62px" }}
      mx="20px"
    >
      <Stack spacing={2} useFlexGap>
        <Typography variant="h1">📦</Typography>
        <Typography variant="h5">Thank you for your order!</Typography>
        <Typography variant="body1" color="text.secondary">
          We have emailed your order confirmation and will update you once its
          shipped.
        </Typography>
      </Stack>
    </Box>
  )
}

export default SuccessPage
