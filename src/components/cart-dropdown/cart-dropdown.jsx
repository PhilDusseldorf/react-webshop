import Button from "../button/button";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  const handleOnClick = () => {
    console.log("go to cart!!!");
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      {cartItems.length !== 0 ? (
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
      <Button onClick={handleOnClick}>Go to cart</Button>
    </div>
  );
};

export default CartDropdown;
