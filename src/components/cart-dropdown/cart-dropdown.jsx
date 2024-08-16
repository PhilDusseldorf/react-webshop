import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item";

const CartDropdown = () => {
  const { cartItems, setIsCartExpanded } = useContext(CartContext);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const handleOnClick = () => {
    navigate("/checkout");
    setIsCartExpanded(false); // Schließt das Dropdown, wenn zur Checkout-Seite navigiert wird
  };

  // Funktion, um zu überprüfen, ob außerhalb des Dropdowns geklickt wurde
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsCartExpanded(false); // Schließt das Dropdown
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length !== 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleOnClick}>Go to cart</Button>
    </div>
  );
};

export default CartDropdown;
