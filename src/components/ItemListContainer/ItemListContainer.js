import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [stock, setStock] = useState(5);
  const params = useParams();

  return (
    <div>
      <h1 style={{ color: "#017a49", }}>{greeting}</h1>
      {/* <ItemCount 
        stock={5} 
        initial={1} 
      /> */}
      <ItemList categoryId={params.categoryId} />
    </div>
  )
}

export default ItemListContainer
