import React, { useState } from 'react'
import carousel1 from '../../../assets/images/carousel-1.jpg'
import carousel2 from '../../../assets/images/carousel-2.jpg'
import carousel3 from '../../../assets/images/carousel-3.jpg'


const Carousel = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div
                        className="carousel-item-item"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <div className="image-container">
                            <img src={carousel1} className="d-block w-100" alt="Magi" />
                            <div className='textContainer'>
                                <h5 className='titleCarousel'><span className='magiFont'>magi</span> es regalos, originalidad, innovación y autenticidad.</h5>
                                <br />
                                <br />
                                {hovered && (
                                    <div className="overlay">
                                        <button className="btn btn-one">Quiero ver más</button>
                                    </div>
                                )}
                                <br />
                                <br />
                                <p className='textCarousel'>Nos caracterizamos por buscar e innovar en productos, manteniendo una excelente calidad del producto final.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div
                        className="carousel-item-item"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <div className="image-container">
                            <img src={carousel2} className="d-block w-100" alt="Magi" />
                            <div className='textContainer'>
                                <h5 className='titleCarousel'>En <span className='magiFont'>magi</span> tenemos una amplia variedad de productos.</h5>
                                <br />
                                <br />
                                {hovered && (
                                    <div className="overlay">
                                        <button className="btn btn-two">Quiero ver más</button>
                                    </div>
                                )}
                                <br />
                                <br />
                                <p className='textCarousel'>Impresiones, fotocopias, anillados, plastificados, agendas, cuadernos de seguimiento docente, tazas, remeras, pad mouse, textiles, souvenirs, llaveros, objetos en madera. Y la última incorporación... ¡Sellos de goma personalizados!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div
                        className="carousel-item-item"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <div className="image-container">
                            <img src={carousel3} className="d-block w-100" alt="..." />
                            <div className='textContainer'>
                                <h5 className='titleCarousel'>¡No dejes pasar la oportunidad de convertir tu cumpleaños en un evento mágico y personalizado! </h5>
                                <br />
                                <br />
                                {hovered && (
                                    <div className="overlay">
                                        <button className="btn btn-three">Quiero ver más</button>
                                    </div>
                                )}
                                <br />
                                <br />
                                <p className='textCarousel'>Los llaveros de madera sublimados de magi Impresiones son el regalo perfecto que tus invitados adorarán.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
