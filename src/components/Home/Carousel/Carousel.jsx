import React, { useState } from 'react';
import './carousel.css'


const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${currentIndex === index ? 'active' : ''}`}
                    >
                        <img src={image.src} alt={image.alt} />
                        <button className="slide-button">{image.buttonText}</button>
                    </div>
                ))}
            </div>
            <button className="prev-button" onClick={prevSlide}>
                Anterior
            </button>
            <button className="next-button" onClick={nextSlide}>
                Siguiente
            </button>
        </div>
    );
};

export default Carousel;