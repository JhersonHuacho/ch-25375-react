import React from 'react'
import './Item.css';
import yogurt from './208192-300-300.webp';

const Item = ({product}) => {
  const { title, price, category, image } = product;

  return (
    <div className="item">
      <div className="item__header">
        <p>{category}</p>
      </div>
      <div className="item__body">
        <img src={image} alt="imagen" />
        <span>{title}</span>
        <p>$ {price}</p>
        <button>Ver detalle del producto</button>
      </div>
      <div className="item__footer">
        <p>Stock disponible 17</p>
      </div>
    </div>
  )
}

export default Item
