import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <h1 style={{ color: "#017a49",  }}>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer
