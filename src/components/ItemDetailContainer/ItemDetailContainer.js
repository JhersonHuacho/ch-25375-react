import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let params = useParams();

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then(response => response.json())
      .then(json => {
        return setProduct(json);
      })

  }, [params.productId])

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
