import "./cart-icon.styles.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { setIsCartExpanded, isCartExpanded, cartCount } = useContext(CartContext);

  const toggleCart = () => {
    setIsCartExpanded(!isCartExpanded);
  };

  return (
    <div className='cart-icon-container' onClick={toggleCart} >
      <Icon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
