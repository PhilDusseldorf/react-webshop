import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, onRemove, onDecrease, onIncrease }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const handleDecreaseClick = () => {
    onDecrease(cartItem);
  };

  const handleIncreaseClick = () => {
    onIncrease(cartItem);
  };

  const handleRemoveClick = () => {
    onRemove(cartItem);
  };

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <div className='quantity'>
        <span
          className={quantity === 1 ? "greyed" : "arrow"}
          onClick={handleDecreaseClick}
        >
          &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={handleIncreaseClick}>
          &#10095;
        </span>
      </div>
      <span className='remove-button' onClick={handleRemoveClick}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
