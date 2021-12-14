import React, { useContext } from 'react'
import { CartContext } from '../../context';
import { MdShoppingCart } from 'react-icons/md';
import './CartWidget.css';

const CardWidget = () => {
  const { cart } = useContext(CartContext);
  console.log('CardWidget => cart', cart);
  const priceTotal = cart.length === 0
    ? 0
    : cart.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price
    }, 0);

  console.log('CardWidget => priceTotal', priceTotal);

  return (
    <div className="cartWidget">
      <a href="." className="cartWidget__link">
        <MdShoppingCart style={{ fontSize: "30px", color: "white" }} />
        <span className="cartWidget__total">{cart.length}</span>
      </a>
      <span className="cartWidget__precio">$/. {priceTotal === 0 ? '0.00' : priceTotal}</span>
    </div>
  )
}

export default CardWidget