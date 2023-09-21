import React from 'react'
import Carousel from './Carousel/Carousel'
import Block from './Block/Block'
import BodyHome from './BodyHome/BodyHome'


const Home = () => {
  return (
    <main className='mainHome'>
      <div className='backgroundCarousel'>
        <Carousel />
      </div>
      <div className='backgroundBlock'>
        <Block />
      </div>
      <div>
        <BodyHome />
      </div>
    </main>
  )
}

export default Home