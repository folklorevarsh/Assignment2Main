import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext({
  totalItems: 0,
  addToCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (quantity) => {
    setTotalItems((prevTotal) => prevTotal + quantity);
  };

  return (
    <CartContext.Provider value={{ totalItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};