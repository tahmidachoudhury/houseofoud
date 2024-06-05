import React, { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function getItemQuantity() {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
