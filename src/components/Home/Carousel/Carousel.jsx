import React, { useState } from "react";
import './carousel.css';
import foto from '../../../assets/images/certificado-carrera.png'

function Carousel() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`carousel-item ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={foto}
                alt="Imagen del carrusel"
                className="carousel-image"
            />
            {isHovered && (
                <button className="carousel-button" onClick={() => alert("Botón clicado")}>
                    Click Me
                </button>
            )}
        </div>
    );
}

export default Carousel;