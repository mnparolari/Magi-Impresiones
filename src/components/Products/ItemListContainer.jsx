import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import souvenirImg from '../../assets/images/regalo_blanco.png'
import papeleriaImg from '../../assets/images/papeleria_blanco.png';
import regalosImg from '../../assets/images/regalosespeciales_blanco.png';
import textilImg from '../../assets/images/remera_blanco.png';
import mateImg from '../../assets/images/mate_blanco.png';
import beberImg from '../../assets/images/bebida_blanco.png';
import mascotasImg from '../../assets/images/perro_blanco.png';

const ItemListContainer = () => {

  const categorys = [
    {
      name: 'Souvenir',
      img: souvenirImg,
      path: 'souvenir'
    },
    {
      name: 'Papelería',
      img: papeleriaImg,
      path: 'papeleria'
    },
    {
      name: 'Regalos especiales',
      img: regalosImg,
      path: 'regalosespeciales'
    },
    {
      name: 'Textiles',
      img: textilImg,
      path: 'textiles'
    },
    {
      name: 'Momento del mate',
      img: mateImg,
      path: 'momentomate'
    },
    {
      name: 'Para beber',
      img: beberImg,
      path: 'parabeber'
    },
    {
      name: 'Mascotas',
      img: mascotasImg,
      path: 'mascotas'
    }
  ]

  const [products, setProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null);
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
    fetch('../data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter((product) => product.category === category);
        setProducts(filteredProducts);
        const foundCategory = categorys.find((cat) => cat.path === category);
        setCategoryInfo(foundCategory);
      })
      .catch((error) => handleError(error))
  }, [category])


  return (
    <section className='sectionContainerProducts'>
      {categoryInfo && (
        <div className='nameCategoryResponsive'>
          <h4 className='titleCategory'>Productos &gt; {categoryInfo.name}</h4>
          <div className='imageContainer'>
            <img className='imgCategory' src={categoryInfo.img} alt={categoryInfo.name} />
          </div>
        </div>
      )}
      <div>
        <ItemList products={products}></ItemList>
      </div>
    </section>
  )
}

export default ItemListContainer