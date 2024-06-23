import React, { useEffect, useState } from "react"
import { Button, Divider, Drawer, List, ListItem } from "@mui/material"
import { Box, Stack, textAlign } from "@mui/system"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
import { formatCurrency } from "../../utilities/formatCurrency"
import CSRFToken, { getCookie } from "../../utilities/csrf"
import allItems from "../../data/allItems.json"
import { Link } from "react-router-dom"
import StripeRedirect from "../StripeCheckoutPage/StripeRedirect"

export function ShoppingCart(props) {
  const { closeCart, cartItems } = useShoppingCart()
  const [mobileOpen, setMobileOpen] = React.useState(false)
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

  //-----------------------------------------------------------------
  function sendCartData(event) {
    event.preventDefault()

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ cartItems: cartWithIntIds }),
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    }
    fetch(import.meta.env.VITE_CREATE_CHECKOUT_SESSION_API, requestOptions)
      .then((data) => {
        if (data.url) {
          // console.log(data.url)
          window.location.href = data.url // Redirect to the Stripe checkout session URL
        } else {
          console.error("Error creating checkout session:", data)
        }
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }
  //-----------------------------------------------------------------
  const cartWithIntIds = cartItems.map((item) => ({
    ...item,
    id: parseInt(item.id, 10),
  }))

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  const DrawerList = (
    <Box sx={{ width: 450 }} role="presentation">
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
      {console.log(JSON.stringify({ cartItems: cartWithIntIds }))}
      {console.log(csrftoken)}
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
      <Drawer open={props.open} onClose={closeCart} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  )
}
