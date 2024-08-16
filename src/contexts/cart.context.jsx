import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const foundItem = cartItems.find((item) => item.id === productToAdd.id);
  if (foundItem) {
    return increaseQuantityById(cartItems, productToAdd.id);
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const increaseQuantityById = (cartItems, id) => {
  return cartItems.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
}

const decreaseQuantityById = (cartItems, id) => {
  return cartItems.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
}

export const CartContext = createContext({
  isCartExpanded: false,
  setIsCartExpanded: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  decreaseItemInCart: () => {},
  increaseItemInCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartExpanded, setIsCartExpanded] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItem) => {
    setCartItems(cartItems.filter(item => item.id !== cartItem.id));
  };

  const increaseItemInCart = (cartItem) => {
    setCartItems(increaseQuantityById(cartItems, cartItem.id));
  };

  const decreaseItemInCart = (cartItem) => {
    if (cartItem.quantity > 1) {
      setCartItems(decreaseQuantityById(cartItems, cartItem.id));
    }
  };

  const value = { isCartExpanded, setIsCartExpanded, addItemToCart, cartItems, cartCount, removeItemFromCart, increaseItemInCart, decreaseItemInCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
