import React, { createContext, useContext, useState } from "react"
import { ShoppingCart } from "../components/NavbarSection/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", [])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  //will use this to change functionality
  //so that items don't go directly to the cart
  //without confirming
  const [tempItems, setTempItems] = useState([])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }
  function getStagedItemQuantity(id) {
    return tempItems.find((item) => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id, size, price) {
    setCartItems((currItems) => {
      if (
        currItems.find((item) => item.id === id && item.size === size) == null
      ) {
        return [...currItems, { id, size: size, price: price, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              size: item.size,
              price: item.price,
              quantity: item.quantity + 1,
            }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id, size, price) {
    setCartItems((currItems) => {
      if (
        currItems.find((item) => item.id === id && item.price === price)
          ?.quantity === 1
      ) {
        return currItems.filter(
          (item) => !(item.id == id && item.price == price)
        )
      } else {
        return currItems.map((item) => {
          if (item.id === id && item.price === price) {
            return {
              ...item,
              size: item.size,
              price: item.price,
              quantity: item.quantity - 1,
            }
          } else {
            return item
          }
        })
      }
    })
  }
  function addTempItem(id, size, price) {
    setTempItems((currItems) => {
      if (
        currItems.find((item) => item.id === id && item.price === price) == null
      ) {
        return [...currItems, { id, size, price, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          if (item.id === id && item.size == size && item.price == price) {
            return {
              ...item,
              size: item.size,
              price: item.price,
              quantity: item.quantity + 1,
            }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseTempItem(id, size, price) {
    setTempItems((currItems) => {
      if (
        currItems.find((item) => item.id === id && item.price === price)
          ?.quantity === 1
      ) {
        return currItems.filter((item) => item.id !== id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, size: item.size, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function confirmCartItem(id, size, price) {
    setCartItems((currItems) => {
      const tempItem = tempItems.find((item) => item.id === id)
      if (tempItem) {
        const existingCartItem = currItems.find(
          (item) => item.id === id && item.size == size && item.price == price
        )
        if (existingCartItem) {
          return currItems.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                size: item.size,
                price: item.price,
                quantity: item.quantity + tempItem.quantity,
              }
            } else {
              return item
            }
          })
        } else {
          return [...currItems, tempItem]
        }
      }
      return currItems
    })
    setTempItems((currItems) => currItems.filter((item) => item.id !== id))
  }
  function removeFromCart(id, size, price) {
    setCartItems((currItems) => {
      return currItems.filter((item) => !(item.id === id && item.size === size))
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        getStagedItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        confirmCartItem,
        addTempItem,
        decreaseTempItem,
        removeFromCart,
        openCart,
        closeCart,
        setCartItems,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart open={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
