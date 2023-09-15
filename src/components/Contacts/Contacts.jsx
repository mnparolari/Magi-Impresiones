import React from 'react'

const Contacts = () => {
  return (
    <section className='sectionContacts'>
      <div className='contactsContainer'>
        <div className='titleContainer'>
          <h2 style={{ fontSize: '25px', fontWeight: '600' }}>Contactate con nosotros</h2>
          <h3 style={{ fontWeight: '200' }}>¡Tu consulta no molesta!</h3>
        </div>
        <div className='iframeContainer' style={{ textAlign: 'center' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22521.485282496833!2d-68.78159626596344!3d-32.955264672307706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0da283f96ab9%3A0xe1897376fe2136cf!2sMagi%20impresiones%20%26%20sublimaciones!5e0!3m2!1ses!2sar!4v1694787020399!5m2!1ses!2sar" width="1150" height="450" style={{ border: '0', textAlign: 'center' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contacts