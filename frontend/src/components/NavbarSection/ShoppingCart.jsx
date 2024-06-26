import React, { useEffect, useState } from "react"
import { Button, Divider, Drawer, List, ListItem } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
import axios from "axios"
import { formatCurrency } from "../../utilities/formatCurrency"
import CSRFToken, { getCookie } from "../../utilities/csrf"
import allItems from "../../data/allItems.json"

export function ShoppingCart(props) {
  const { closeCart, cartItems } = useShoppingCart()
  const [data, setData] = useState([])
  const csrftoken = getCookie("csrftoken")

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

  const sendCartData = async (event) => {
    event.preventDefault() // Prevent default form submission

    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    }

    try {
      const response = await axios.post(
        import.meta.env.VITE_CREATE_CHECKOUT_SESSION_API,
        { cartItems: cartWithIntIds },
        requestOptions
      )

      if (response.data.url) {
        window.location.assign(response.data.url) // Redirect to the Stripe checkout session URL
      } else {
        console.error("Error creating checkout session:", response.data)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const cartWithIntIds = cartItems.map((item) => ({
    ...item,
    id: parseInt(item.id, 10),
  }))

  const DrawerList = (
    <Box sx={{ width: "100%" }} role="presentation">
      <List>
        <ListItem>
          <h2>Cart</h2>
        </ListItem>

        <Stack>
          {cartItems.map((item) => (
            <>
              <CartItem key={item.id} {...item} />
              <Divider />
            </>
          ))}
        </Stack>
      </List>
      <Box display="flex" justifyContent="space-between">
        <div>Subtotal:</div>
        <div>
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = data.find((i) => i.id === Number(cartItem.id))
              return total + (item?.price || 0) * cartItem.quantity
            }, 0)
          )}
        </div>
      </Box>
      <form onSubmit={sendCartData}>
        <CSRFToken />
        <Button variant="outline-danger" type="submit" size="sm">
          Checkout
        </Button>
      </form>
    </Box>
  )

  return (
    <div>
      <Drawer
        PaperProps={{
          sx: { width: { xs: "95%", sm: "70%", md: "50%", lg: "30%" } },
        }}
        open={props.open}
        onClose={closeCart}
        anchor="right"
      >
        {DrawerList}
      </Drawer>
    </div>
  )
}
