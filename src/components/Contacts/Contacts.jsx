import React from 'react'

const Contacts = () => {
  return (
    <section className='sectionContacts'>
      <div className='contactsContainer'>
        <h2 style={{ fontSize: '25px', fontWeight: '600' }}>Contactate con nosotros</h2>
        <h3 style={{ fontWeight: '200' }}>¡Tu consulta no molesta!</h3>
        <div className='iframeContainer' style={{ textAlign: 'center' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22521.485282496833!2d-68.78159626596344!3d-32.955264672307706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0da283f96ab9%3A0xe1897376fe2136cf!2sMagi%20impresiones%20%26%20sublimaciones!5e0!3m2!1ses!2sar!4v1694787020399!5m2!1ses!2sar" width="1150" height="450" style={{ border: '0', textAlign: 'center' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contacts