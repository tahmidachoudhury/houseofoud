import React from "react";
import Navbar from "./NavbarSection/Navbar";
import Footer from "./FooterSection/Footer";
import Home from "./indexPage/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopPage from "./ShopPage/ShopPage.jsx";
import ProductPage from "./ProductPage/ProductPage.jsx";
import SignInSide from "./SignupPage/Login.jsx";
import SignUp from "./SignupPage/Sign-Up.jsx";
import Checkout from "./CheckoutPage/Checkout.jsx";
import { ShoppingCartProvider } from "../context/ShoppingCartContext.jsx";

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path="/cart" element={<Checkout />} /> */}
          <Route path="/product/:id" element={<ProductPage />} />
          {/* <Route path="/checkout" element={<CheckoutPage />} */}
        </Routes>
        <Footer />
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
