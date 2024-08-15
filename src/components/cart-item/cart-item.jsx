import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
const {name, quantity} = cartItem;

  return (
    <div className='cart-item-container'>
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
