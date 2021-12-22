import { Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context';
import './Cart.css';

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleClickEliminar = (productid) => {
    removeItem(productid);
  }

  // const handleClickGenerarOrden = () => {
  //   const userInfo = {
  //     name: 'Francisco',
  //     phone: '944954119',
  //     email: 'jhersonhuacho@gmail.com'
  //   }
  //   const orders = db.collection('orders');
  //   console.log('orders', orders)
  //   const newOrder = {
  //     buyer: userInfo,
  //     items: cart,
  //     date: Timestamp.fromDate(new Date()),
  //     total: price()
  //   }

  //   setLoading(true);
  //   orders.add(newOrder)
  //     .then(({ id }) => {
  //       setOrderId(id);
  //     }).catch(err => {
  //       setError(err);
  //     }).finally(() => {
  //       setLoading(false);
  //     })
  // }

  const handleClickGenerarOrden = () => {
    console.log('handleClickGenerarOrden', handleClickGenerarOrden)
    createOrders()
      .then((id) => {
        console.log('id', id)
        setOrderId(id);
      }).catch(err => {
        setError(err);
      }).finally(() => {
        setLoading(false);
      })
  }

  async function createOrders() {
    const userInfo = {
      name: 'Francisco',
      phone: '944954119',
      email: 'jhersonhuacho@gmail.com'
    }

    const newOrder = {
      buyer: userInfo,
      items: cart,
      date: Timestamp.fromDate(new Date()),
      total: price()
    }
    console.log('createOrders', newOrder)
    console.log('cart', cart)
    const docRef = await addDoc(collection(db, 'orders'), {
      buyer: userInfo,
      items: cart,
      date: Timestamp.fromDate(new Date()),
      total: price()
    });
    console.log('createOrders => docRef', docRef)
    return docRef.id;
  }

  function price() {
    const total = cart.reduce((previousValue, currentValue) => {
      return currentValue.price + previousValue
    }, 0)
    return total;
  }

  return (
    <>
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
      <div className='button-content'>
        {
          cart.length !== 0 && <button onClick={handleClickGenerarOrden}>Terminar la compra</button>
        }
      </div>
      {
        orderId !== '' && (
          <div className='mensaje-confirmacion'>
            <p>La orden se genero correctamente: <span>{orderId}</span></p>
          </div>
        )
      }
    </>
  )
}

export default Cart
