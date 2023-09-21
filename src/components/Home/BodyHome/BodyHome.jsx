import React from 'react'
import taza1 from '../../../assets/images/taza-elefante.png'
import taza2 from '../../../assets/images/taza-infor.png'

const BodyHome = () => {
    return (
        <div className='bodyHomeContainer'>
            <h3 className='titleBodyHome'>| Comunidad <span className='magiFont'>magi</span> |</h3>
            <br />
            <br />
            <h3 className='titleBodyHome'>¡El producto más elegido!</h3>
            <div className='imgContainer'>
                <img src={taza1} alt="" className='imgBodyHome'/>
                <img src={taza2} alt="" className='imgBodyHome'/>
            </div>
            <p className='textBodyHome'>Entre nuestros productos son tendencia las tazas mágicas y con efecto 3D. <br/>
            <span style={{fontWeight: '600'}}>¡Son ideales para sorprender en un regalo!</span>
            </p>
        </div>
    )
}

export default BodyHome