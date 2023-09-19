import React from 'react'
import Carousel from './Carousel/Carousel'

const images = [
  {
      src: 'beber.png',
      alt: 'Imagen 1',
      buttonText: 'Botón 1',
  },
  {
      src: 'catalogo.png',
      alt: 'Imagen 2',
      buttonText: 'Botón 2',
  },
  {
      src: 'mascotas.png',
      alt: 'Imagen 3',
      buttonText: 'Botón 3',
  },
];


const Home = () => {
  return (
    <>
      <div>Home</div>
      <Carousel images={images}/>
    </>
  )
}

export default Home