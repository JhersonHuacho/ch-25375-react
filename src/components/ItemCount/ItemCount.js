import React, { useState } from 'react'
import './ItemCount.css';
import { HiOutlinePlusSm, HiOutlineMinus } from 'react-icons/hi';

const ItemCount = ({ stock, initial }) => {
  const [countCart, setCountCart] = useState(initial);

  const handleClickAdd = () => {
    if (countCart < stock) {
      setCountCart(countCart + 1);
    }
  }

  const handleClickMinus = () => {
    if (countCart !== 0) {
      setCountCart(countCart - 1);
    }
  }

  return (
    <>
      <div className="item">
        <div className="item__content">
          <div className="item__count">
            <span>Camisa tiger</span>
            <div className="item__content-count">
              <button
                className="item__button-minus"
                onClick={handleClickMinus}
              >
                <HiOutlineMinus className="item__svg-minus" />
              </button>
              <div className="item__content-quantity">
                <span className="item__quantity">{countCart}</span>
              </div>
              <button
                className="item__button-plus"
                onClick={handleClickAdd}
              >
                <HiOutlinePlusSm className="item__svg-plus" />
              </button>
            </div>
          </div>
          <div className="item__content-button-add-cart">
            <button className="item__button-add-cart">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCount
