import "./cart-icon.styles.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Tooltip from "../tooltip/tooltip";
const CartIcon = () => {
  const { setIsCartExpanded, isCartExpanded, cartCount } =
    useContext(CartContext);

  const toggleCart = () => {
    setIsCartExpanded(!isCartExpanded);
  };

  return (
    <Tooltip text='Hier wird die Anzahl der bereits im Warenkorb hinterlegten Produkte angezeigt.'>
      <div className='cart-icon-container' onClick={toggleCart}>
        <Icon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
      </div>
    </Tooltip>
  );
};

export default CartIcon;
