import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { CartContext } from '../../CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  // const [cart, setCart] = useState([{
  //   id: 1,
  //   userId: 1,
  //   products: []
  // }]);
  const { addItem } = useContext(CartContext);
  const [isAddCart, setIsAddCart] = useState(false);
  const navigate = useNavigate();
  console.log('ItemDetail => product', product)
  const onAdd = (quantity) => {
    // setCart([{ ...cart, products: cart[0].products.concat({ productId: 1, quantity: quantity }) }]);
    // setCart(cart.concat({
    //   name: product.name,
    //   price: product.price,
    //   quantity: quantity
    // }));
    addItem(product, quantity);
    setIsAddCart(true);
  }

  const handleClickFinishCart = () => {
    navigate(`cart`);
  }

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
          {!isAddCart &&
            <div className="item-detail__count">
              <ItemCount stock={10} initial={0} onAdd={onAdd} />
            </div>
          }
          <div className="item-detail__category">
            {/* <strong>Categoría:</strong> {product.category} */}
            <p><strong>Stock:</strong> 10</p>
          </div>
          <button className="item__button-finish-cart" onClick={handleClickFinishCart}>
            Terminar comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
