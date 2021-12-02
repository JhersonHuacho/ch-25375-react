import React from 'react'
import './Item.css';
// import yogurt from './208192-300-300.webp';
import { useNavigate } from 'react-router-dom'

const Item = ({ product }) => {
  const { id, title, price, category, image } = product;
  let navigate = useNavigate();

  const handleClickDetalleProducto = () => {
    navigate(`detailProduct/${id}`);
  }

  return (
    <div className="item">
      <div className="item__header">
        <p>{category}</p>
      </div>
      <div className="item__body">
        <img src={image} alt="imagen" />
        <span>{title}</span>
        <p>$ {price}</p>
        <button onClick={handleClickDetalleProducto}>
          Ver detalle del producto
        </button>
      </div>
      <div className="item__footer">
        <p>Stock disponible 17</p>
      </div>
    </div>
  )
}

export default Item
