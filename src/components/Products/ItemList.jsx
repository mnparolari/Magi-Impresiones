import React from 'react'
import Item from './Item';


const ItemList = (props) => {

  const { products } = props;

  return (
    <div className='listContainer'>
      {products.map(product => (
        <Item product={product.product} category={product.category} description={product.description} image={product.image} key={product.id} />
      ))}
    </div>
  )
}

export default ItemList