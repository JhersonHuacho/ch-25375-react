import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductModular } from '../../firebase';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let params = useParams();

  useEffect(() => {

    // fetch(`https://fakestoreapi.com/products/${params.productId}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     return setProduct(json);
    //   })

    getProductModular(params.productId).then(result => {
      console.log('ItemDetailContainer => getProductModular', result);
      setProduct({ ...result, id: params.productId });
    })

  }, [params.productId])

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
