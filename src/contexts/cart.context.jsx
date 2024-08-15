import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartExpanded: false,
  setIsCartExpanded: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartExpanded, setIsCartExpanded] = useState(CartContext);
  const value = { isCartExpanded, setIsCartExpanded };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
