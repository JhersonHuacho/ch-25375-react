import React from 'react'
import { MdShoppingCart } from 'react-icons/md';
import './CartWidget.css';

const CardWidget = () => {
  return (
    <div>
      <a href="." className="cartWidget">
        <MdShoppingCart style={{ fontSize: "30px", color: "white" }} />
        <span>4</span>
      </a>
      <span>$/. 0.00</span>
    </div>
  )
}

export default CardWidget