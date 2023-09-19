import React from 'react';
import whatsapp from '../../assets/images/whatsapp.png'
import location from '../../assets/images/ubicacion.png'
import email from '../../assets/images/email.png'
import ig from '../../assets/images/ig.png'
import facebook from '../../assets/images/facebook.png'
import catalogue from '../../assets/images/catalogo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContainer'>
        <h3 className='footerh3'>MAGI Impresiones & sublimados </h3>
        <div className='iconsBox'>
          <div>
            <div className='iconsContainer'>
              <a href="https://goo.gl/maps/CDRBpGH5nqJxNxfJ7" target='_blank' rel="noreferrer"><img src={location} alt="Ubicación" /></a>
              <p className='iconsText'>Maipú - Mendoza</p>
            </div>
            <div className='iconsContainer'>
              <a href="https://wa.me/5492612421929" target='_blank' rel="noreferrer"><img src={whatsapp} alt="Whatsapp" /></a>
              <p className='iconsText'>0261 242-1929</p>
            </div>
            <div className='iconsContainer'>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=villarroyam.imei@gmail.com" target='_blank' rel="noreferrer"><img src={email} alt="Email" /></a>
              <p className='iconsText'>villarroyam.imei@gmail.com</p>
            </div>
            .
          </div>
          <div>
            <div className='iconsContainer'>
              <a href="https://www.instagram.com/magiimpresiones/?hl=es" target='_blank' rel="noreferrer"><img src={ig} alt="Instagram" /></a>
              <p className='iconsText'>magiimpresiones</p>
            </div>
            <div className='iconsContainer'>
              <a href="https://m.facebook.com/magiimpresiones" target='_blank' rel="noreferrer"><img src={facebook} alt="Facebook" /></a>
              <p className='iconsText'>Magi Impresiones</p>
            </div>
            <div className='iconsContainer'>
              <a href="https://heyzine.com/flip-book/f15f0e13a3.html" target='_blank' rel="noreferrer"><img src={catalogue} alt="Catálogo" /></a>
              <p className='iconsText'>Nuestro Catálogo</p>
            </div>
          </div>
        </div>
        <div className='iconsBoxMobile'>
          <a href="https://wa.me/5492612421929" target='_blank' rel="noreferrer"><img src={whatsapp} alt="Whatsapp" /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=villarroyam.imei@gmail.com" target='_blank' rel="noreferrer"><img src={email} alt="Email" /></a>
          <a href="https://www.instagram.com/magiimpresiones/?hl=es" target='_blank' rel="noreferrer"><img src={ig} alt="Instagram" /></a>
        </div>
      </div>
      <div className='smallContainer'>
        <small className='smallFooter'>Mendoza | Argentina <br />
          Todos los derechos reservados - 2023 ©
        </small>
      </div>
    </footer>
  )
}

export default Footer