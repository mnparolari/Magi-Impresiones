import React from 'react'
import CarouselItem from './CarouselItem'
import './Carousel.css'

const Carousel = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div className="carousel-item active">
                    <CarouselItem src="https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg" overlaySrc='https://wowslider.com/sliders/demo-80/data1/images/plumage176723_1920.jpg'/>
                </div>
                <div className="carousel-item">
                    <CarouselItem src="https://wowslider.com/sliders/demo-80/data1/images/plumage176723_1920.jpg" />
                </div>
                <div className="carousel-item">
                    <CarouselItem src="https://wowslider.com/sliders/demo-80/data1/images/nature497978_1920.jpg"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
