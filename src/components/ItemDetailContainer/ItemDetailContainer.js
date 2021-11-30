import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(json => {
        return setProduct(json);
      })

  }, [id])

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
