import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item.jsx/checkout-item";

import "./checkout.styles.scss";

const Checkout = () => {
  const {
    cartItems,
    decreaseItemInCart,
    increaseItemInCart,
    removeItemFromCart,
  } = useContext(CartContext);

  const totalValue = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleRemove = (id) => {
    console.log("Remove item");
    removeItemFromCart(id);
  };
  const handleIncrease = (id) => {
    console.log("increase quantity");
    increaseItemInCart(id);
  };
  const handleDecrease = (id) => {
    console.log("decrease quantity");
    decreaseItemInCart(id);
  };

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem
          key={item.id}
          cartItem={item}
          onRemove={handleRemove}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
      ))}
      <h2 className='total'>Total: {totalValue} €</h2>
    </div>
  );
};

export default Checkout;
