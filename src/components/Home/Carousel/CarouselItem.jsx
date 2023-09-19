import React, { useState } from 'react'
import './Carousel.css'

const CarouselItem = ({ src, overlaySrc }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="carousel-item-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="image-container">
                <img src={src} className="d-block w-100" alt="..." />
                {hovered && (
                    <div className="image-overlay">
                        <img src={overlaySrc} alt="Overlay" />
                        <button className="btn btn-primary">Ver Detalles</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CarouselItem