import React, { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ defaultValue = [], children }) => {

  const [cart, setCart] = useState(defaultValue);

  const addItem = (item, quantity) => {
    console.log('item', item);
    console.log('quantity', quantity);
    if (!isInCart(item.id)) {
      const objCart = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantity
      }
      setCart(cart.concat(objCart));
    } else {
      console.log('El producto ya fue agregado al carrito');
    }
  }

  const removeItem = (itemId) => {
    const newCart = cart.filter(product => product.id !== itemId);
    setCart(newCart);
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (id) => {
    if (cart.find(product => product.id === id)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}

