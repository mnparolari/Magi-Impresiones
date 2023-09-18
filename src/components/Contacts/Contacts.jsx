import React from 'react'

const Contacts = () => {
  return (
    <section className='sectionContacts'>
      <div className='contactsContainer'>
        <div className='titleContainer'>
          <h2 className='contactsh2'>Contactate con nosotros</h2>
          <h3 className='contactsh3'>¡Tu consulta no molesta!</h3>
        </div>
        <div className='iframeContainer'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22521.485282496833!2d-68.78159626596344!3d-32.955264672307706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0da283f96ab9%3A0xe1897376fe2136cf!2sMagi%20impresiones%20%26%20sublimaciones!5e0!3m2!1ses!2sar!4v1694787020399!5m2!1ses!2sar" title="Ubicación" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className='formContainer'>
        <h3 className='formh3'>Envianos un mensaje</h3>
        <form className="row">
          <div className='namePhoneContainer'>
            <div className="col-md-2">
              <input type="name" className="form-control" id="inputName4" placeholder='Nombre y apellido' />
            </div>
            <div className="col-md-2">
              <input type="phone" className="form-control" id="inputPhone4" placeholder='Teléfono' />
            </div>
          </div>
          <div className='emailContainer'>
            <div className="col-4">
              <input type="email" className="form-control" id="inputEmail4" placeholder="Mail" />
            </div>
          </div>
          <div className='emailContainer'>
            <div className="col-4">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Mensaje'></textarea>
            </div>
          </div>
        </form>
        <div className='btnContainer'>
          <button type="button" className="btn submit">Enviar</button>
        </div>
      </div>
    </section>
  )
}

export default Contacts