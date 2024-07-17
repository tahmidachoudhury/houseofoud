import React from "react"
import { Outlet } from "react-router"
import { WishListProvider } from "../../context/LikedItemsContext"

export default () => {
  return (
    <>
      <WishListProvider />
      <Outlet />
    </>
  )
}
