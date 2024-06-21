import React from "react"
import Navbar from "./Navbar"
import { Outlet } from "react-router"
import Footer from "../FooterSection/Footer"

export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
