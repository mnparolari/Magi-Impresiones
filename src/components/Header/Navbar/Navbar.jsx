import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logomagi.png';
import { Link, NavLink } from 'react-router-dom';
import souvenirImg from '../../../assets/images/souvenir.png';
import papeleriaImg from '../../../assets/images/papeleria.png';
import maderaImg from '../../../assets/images/madera.png';
import textilImg from '../../../assets/images/textil.png';
import mateImg from '../../../assets/images/mate.png';
import beberImg from '../../../assets/images/beber.png';
import mascotasImg from '../../../assets/images/mascotas.png';
import sellosImg from '../../../assets/images/sellos.png';

const categoryImages = {
  'Souvenir': souvenirImg,
  'Papelería': papeleriaImg,
  'Sublimados en madera': maderaImg,
  'Textiles': textilImg,
  'Momento del mate': mateImg,
  'Para beber': beberImg,
  'Mascotas': mascotasImg,
  'Sellos': sellosImg,
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 992); // Utilizamos 992px como tu punto de ruptura para móviles

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownOpen(!dropdownOpen);
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (event) => {
    event.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  }

  const location = useLocation();

  const getLinkClass = (path) => {
    if (location.pathname === path) {
      return "nav-link active-link";
    }
    return "nav-link";
  }

  return (
    <header>
      <div className="navbar">
        <button onClick={toggleMobileMenu} className="mobile-menu-button">☰</button>
        <Link to={"/"} className="nav-link">
          <div>
            <img src={logo} alt="StoreLogo" className="logo" />
          </div>
        </Link>
        <nav className={mobileMenuOpen ? 'mobile-menu-open' : ''}>
          <ul className="navbarList">
            <li className="objectList">
              <NavLink to={"/"} className={getLinkClass("/")} >Inicio</NavLink>
            </li>
            <li className="objectList">
              <NavLink to={"/SobreMagi"} className={getLinkClass("/sobremagi")} >Sobre magi</NavLink>
            </li>
            <li className={`objectList dropdown ${dropdownOpen ? 'open' : ''}`}>
              <NavLink activeclassname="active-link" className="nav-link" onClick={toggleDropdown}>Nuestros productos </NavLink>
              <div className="dropdown-content">
                {['Souvenir', 'Papelería', 'Sublimados en madera', 'Textiles', 'Momento del mate', 'Para beber', 'Mascotas', 'Sellos'].map((category, index) => (
                  <div className="dropdown-item" key={index} onClick={toggleDropdown}>
                    <NavLink to={category}>
                      {!isMobileView && <img src={categoryImages[category]} alt={category} className="dropdown-image" />}
                      <p>{category}</p>
                    </NavLink>
                  </div>
                ))}
              </div>
            </li>
            <li className="objectList">
              <NavLink to={"/Contactos"} className={getLinkClass("/contactos")} >Contáctanos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;