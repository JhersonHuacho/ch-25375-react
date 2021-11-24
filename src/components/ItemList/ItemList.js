import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
        setProducts(json);
      })
  }, [])

  return (
    <div className="item-list">
      {
        products.map(product => {
          return (
              <Item product={product} />
            )
        })
      }
    </div>
  )
}

export default ItemList
