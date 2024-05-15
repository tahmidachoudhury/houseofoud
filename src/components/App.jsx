import React from 'react';
import Navbar from './indexPage/NavbarSection/Navbar';
import Footer from './indexPage/FooterSection/Footer';
import Home from './indexPage/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App(){
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      <Footer />
    </Router>

  )
}

export default App;
