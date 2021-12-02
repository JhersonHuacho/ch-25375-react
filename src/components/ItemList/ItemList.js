import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
import './ItemList.css';

const ItemList = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  let categoryIdValue = null;

  if (categoryId === '1') {
    categoryIdValue = "jewelery";
  } else if (categoryId === '2') {
    categoryIdValue = "electronics";
  } else if (categoryId === '3') {
    categoryIdValue = "women's clothing";
  } else if (categoryId === '4') {
    categoryIdValue = "men's clothing";
  }
  // console.log('categoryId', categoryId)
  // console.log('categoryIdValue', categoryIdValue)
  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        const productsCatgegory = products.filter(product => {
          return product.category === (categoryIdValue ? categoryIdValue : product.category)
        })
        // console.log('productsCatgegory', productsCatgegory);
        setProducts(productsCatgegory);
        setLoading(false);
      })
  }, [categoryIdValue])

  return (
    <>
      {
        loading
          ? (
            <div className="spinner-content">
              <Spinner />
            </div>
          )
          : (
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
    </>
  )
}

export default ItemList
