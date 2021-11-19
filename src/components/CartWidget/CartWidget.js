import React from 'react'
import { MdShoppingCart } from 'react-icons/md';
import './CartWidget.css';

const CardWidget = () => {
  return (
    <div className="cartWidget">
      <a href="." className="cartWidget__link">
        <MdShoppingCart style={{ fontSize: "30px", color: "white" }} />
        <span className="cartWidget__total">4</span>
      </a>
      <span className="cartWidget__precio">$/. 0.00</span>
    </div>
  )
}

export default CardWidget