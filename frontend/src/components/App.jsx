import React from "react";
import Navbar from "./indexPage/NavbarSection/Navbar";
import Footer from "./indexPage/FooterSection/Footer";
import Home from "./indexPage/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopPage from "./ShopPage/ShopPage.jsx";
import ProductPage from "./ProductPage/ProductPage.jsx";
import SignInSide from "./SignupPage/Sign-In.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInSide />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
