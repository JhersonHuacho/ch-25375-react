import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <div className="item-detail__container">
        <div className="item-detail__img">
          <img src={product.image} alt="img" />
        </div>
        <div className="item-detail__main">
          <div className="item-detail__title">
            <h4>{product.category}</h4>
          </div>
          <div className="item-detail__description">
            <h2>{product.title}</h2>
          </div>
          <hr />
          <div className="item-detail__price-rating">
            <div className="rating-start">
              <BsStarFill className="start" />
              <BsStarFill className="start" />
              <BsStarFill className="start" />
              <BsStar className="start" />
              <BsStar className="start" />
              <span>(1)</span>
            </div>
            <span>S/. {product.price}</span>
          </div>
          <hr />
          <div className="item-detail__count">
            <ItemCount stock={10} initial={0} />
          </div>
          <div className="item-detail__category">
            {/* <strong>Categoría:</strong> {product.category} */}
            <p><strong>Stock:</strong> 10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
