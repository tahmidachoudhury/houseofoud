import React from "react"
import Navbar from "./NavbarSection/Navbar"
import Footer from "./FooterSection/Footer"
import Home from "./indexPage/Home.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ShopPage from "./ShopPage/ShopPage.jsx"
import ProductPage from "./ProductPage/ProductPage.jsx"
import SignInSide from "./SignupPage/Login.jsx"
import SignUp from "./SignupPage/Sign-Up.jsx"
import { ShoppingCartProvider } from "../context/ShoppingCartContext.jsx"
import SuccessPage from "./StripeCheckoutPage/SuccessPage.jsx"
import CancelPage from "./StripeCheckoutPage/CancelPage.jsx"
import LandingPage from "./ComingSoonPage/ComingSoonLander.jsx"
import WithNav from "./NavbarSection/WithNav.jsx"
import WithoutNav from "./NavbarSection/WithoutNav.jsx"
import { WishListProvider } from "../context/LikedItemsContext.jsx"
import { themeOptions } from "../themes/Theme.jsx"
import { ThemeProvider } from "@mui/material/styles"

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <ShoppingCartProvider>
        <Router>
          <Routes>
            <Route element={<WithNav />}>
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/cancel" element={<CancelPage />} />
            </Route>
            <Route element={<WithoutNav />}>
              <Route path="/login" element={<SignInSide />} />
              <Route path="/signup" element={<SignUp />} />
              <Route exact path="/" element={<LandingPage />} />
            </Route>
          </Routes>
        </Router>
      </ShoppingCartProvider>
    </ThemeProvider>
  )
}

export default App
