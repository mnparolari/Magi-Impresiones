import React from 'react'
import logo from '../../assets/images/logomagi.png';
import '../../scss/components/_about.scss';

const Contacts = () => {
  return (
    <section className='sectionContacts about'>
      <div className='contactsContainer'>
        <div className='titleContainer'>
          <h2 className='conocemas'>Conocé más sobre nosotros</h2>
        </div>
      </div>
      <h3 className='infoabout'>Situado en la hermosa ciudad de Maipú, Mendoza, "Magi Impresiones y Sublimación" se distingue como un emprendimiento que satisface los deseos de sus clientes mediante productos creativos en el ámbito de la impresión, sublimación y diseño de sellos.</h3>
      <h3 className='mision'>Misión:</h3>
      <h3 className='infoabout'>Actuar como el vínculo entre la creatividad y la realidad, brindando soluciones exclusivas y personalizadas que realzan tanto la identidad como los sentimientos de sus clientes, captando sus ideas y transformándolas en productos concretos.</h3>
      <div className='contenedorLogo1'>
        <div className='contenedorLogo2'>
          <img src={logo} alt="StoreLogo" className="logo" />
        </div>
      </div>
    </section>
  )
}

export default Contacts