import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context';
import './Cart.css';

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const handleClickEliminar = (productid) => {
    removeItem(productid);
  }

  return (
    <div className='cart__main'>
      {
        cart.length === 0
          ? (
            <div className='cart__info'>
              <h2>No hay productos agregados al carrito.</h2>
              <Link to="/">Volver al Landing</Link>
            </div>
          )
          : (
            cart.map((product) => {
              return (
                <div key={product.id} className='cart'>
                  <div className='cart__img'>
                    <img src={product.image} alt='imagen' />
                  </div>
                  <div className='cart__content'>
                    <h3 className='cart__category'>{product.category}</h3>
                    <p className='cart__description'>{product.description}</p>
                  </div>
                  <div className='cart__actions'>
                    <button className='cart__button' onClick={() => handleClickEliminar(product.id)}>Eliminar</button>
                  </div>
                  <div className='cart__price'>
                    <span>{product.price}</span>
                  </div>
                </div>
              )
            })
          )
      }
    </div>
  )
}

export default Cart
