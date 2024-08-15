import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const foundItem = cartItems.find((item) => item.id === productToAdd.id);
  if (foundItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartExpanded: false,
  setIsCartExpanded: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartExpanded, setIsCartExpanded] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartExpanded, setIsCartExpanded, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
