import "./cart-icon.styles.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { setIsCartExpanded, isCartExpanded } = useContext(CartContext);

  const toggleCart = () => {
    console.log(`toggle clicked with isCartexpanded = ${isCartExpanded.valueOf}`);
    setIsCartExpanded(!isCartExpanded);
  };

  return (
    <div className='cart-icon-container' onClick={toggleCart} >
      <Icon className='shopping-icon' />
      <span className='item-count'>00</span>
    </div>
  );
};

export default CartIcon;
