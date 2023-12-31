import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Navbar from '../components/Header/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Contacts from '../components/Contacts/Contacts'
import ItemListContainer from '../components/Products/ItemListContainer'
import ButtonWhatsapp from '../components/ButtonWhatsapp/ButtonWhatsapp'
import NavbarBootstrap from '../components/Header/Navbar/NavbarBootstrap'

const RoutesNavigation = () => {
    return (
        <BrowserRouter>
            <NavbarBootstrap />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobremagi' element={<About />} />
                <Route path="/:productos" element={<ItemListContainer />} />
                <Route path="/:productos/:category" element={<ItemListContainer />} />
                <Route path='/contactos' element={<Contacts />} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
            <ButtonWhatsapp />
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesNavigation
