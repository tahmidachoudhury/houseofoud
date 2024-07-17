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
import StripeRedirect from "./StripeCheckoutPage/StripeRedirect.jsx"
import SuccessPage from "./StripeCheckoutPage/SuccessPage.jsx"
import CancelPage from "./StripeCheckoutPage/CancelPage.jsx"
import LandingPage from "./ComingSoonPage/ComingSoonLander.jsx"
import WithNav from "./NavbarSection/WithNav.jsx"
import WithoutNav from "./NavbarSection/WithoutNav.jsx"
import WishlistPage from "./WishlistPage/WishlistPage.jsx"
import { WishListProvider } from "../context/LikedItemsContext.jsx"
import WithWishlistContext from "./NavbarSection/WithWishlistContext.jsx"

function App() {
  return (
    <ShoppingCartProvider>
      <WishListProvider>
        <Router>
          <Routes>
            <Route element={<WithNav />}>
              <Route path="/home" element={<Home />} />
              <Route path="/liked" element={<WishlistPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/checkout" element={<StripeRedirect />} />
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
      </WishListProvider>
    </ShoppingCartProvider>
  )
}

export default App
