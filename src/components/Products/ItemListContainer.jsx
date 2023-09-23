import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { category } = useParams();

  const handleError = () => {
    const MySwalError = withReactContent(Swal)
    MySwalError.fire({
      icon: 'error',
      title: '¡Oops... Ocurrió un error!',
      text: 'Refrescá y volvé a intentarlo.',
    });
  };

  useEffect(() => {
    fetch('../data/mockData.json')
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter((product) => product.category === category);
        setProducts(filteredProducts);
      })
      .catch((error) => handleError(error))
  }, [category])


  return (
    <section style={{overflowY: 'hidden'}}>
      <ItemList products={products}></ItemList>
    </section>
  )
}

export default ItemListContainer