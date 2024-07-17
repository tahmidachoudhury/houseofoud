import React, { createContext, useContext, useState } from "react"
import WishlistPage from "../components/WishlistPage/WishlistPage"
import { useLocalStorage } from "../hooks/useLocalStorage"

const WishlistContext = createContext({
  likedItems: [],
  addLikedItem: () => {},
  unlikeItem: () => {},
  likedQuantity: 0,
})

export function useLikedItems() {
  return useContext(WishlistContext)
}

export function WishListProvider({ children }) {
  const [likedItems, setLikedItems] = useLocalStorage("liked", [])

  const likedQuantity = likedItems.length

  const addLikedItem = (item) => {
    setLikedItems([...likedItems, item])
  }

  const unlikeItem = (id) => {
    setLikedItems(likedItems.filter((item) => item.id !== id))
  }

  return (
    <WishlistContext.Provider
      value={{
        addLikedItem,
        unlikeItem,
        likedItems,
        likedQuantity,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}
