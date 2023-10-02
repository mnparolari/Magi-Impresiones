import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import souvenirImg from '../../../assets/images/souvenir.png';
import papeleriaImg from '../../../assets/images/papeleria.png';
import maderaImg from '../../../assets/images/madera.png';
import textilImg from '../../../assets/images/textil.png';
import mateImg from '../../../assets/images/mate.png';
import beberImg from '../../../assets/images/beber.png';
import mascotasImg from '../../../assets/images/mascotas.png';
import sellosImg from '../../../assets/images/sellos.png';
import logo from '../../../assets/images/logomagi.png';
import '../../../scss/components/_navbarBootstrap.scss'
import '../../../scss/base/_mediaquery.scss'

const categorys = [
    {
        name: 'Souvenir',
        img: souvenirImg,
        path: '/souvenir'
    },
    {
        name: 'Papelería',
        img: papeleriaImg,
        path: '/papeleria'
    },
    {
        name: 'Sublimados en madera',
        img: maderaImg,
        path: '/sublimadomadera'
    },
    {
        name: 'Textiles',
        img: textilImg,
        path: '/textiles'
    },
    {
        name: 'Momento del mate',
        img: mateImg,
        path: '/momentomate'
    },
    {
        name: 'Para beber',
        img: beberImg,
        path: '/parabeber'
    },
    {
        name: 'Mascotas',
        img: mascotasImg,
        path: '/mascotas'
    },
    {
        name: 'Sellos',
        img: sellosImg,
        path: '/sellos'
    }
]

const NavbarBootstrap = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const activateLink = (linkName) => {
        setActiveLink(linkName);
    };

    const activateCategory = (categoryName) => {
        setActiveCategory(categoryName);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="container-mobile">
                        <div className="container">
                            <Link to={"/"} className="nav-link-logo">
                                <img src={logo} alt="StoreLogo" className="logo" />
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">☰</span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={'/'} className={`nav-link-home ${activeLink === 'Inicio' ? 'active-link-home' : ''}`}
                                    onClick={() => {
                                        activateLink('Inicio');
                                        activateCategory(null);
                                    }}>
                                    Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/sobremagi'} className={`nav-link-home ${activeLink === 'SobreMagi' ? 'active-link-about' : ''}`}
                                    onClick={() => {
                                        activateLink('SobreMagi');
                                        activateCategory(null);
                                    }}
                                    style={{ whiteSpace: 'nowrap' }}>
                                    Sobre <span className='magiFontNav'>magi</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link-home ${activeLink === 'NuestroProductos' ? 'active-link-products' : ''}`}
                                    onClick={(e) => {
                                        toggleDropdown(e);
                                        activateLink('NuestroProductos');
                                        activateCategory(null);
                                    }}
                                    aria-expanded={isDropdownOpen ? 'true' : 'false'}
                                    style={{ whiteSpace: 'nowrap' }}>
                                    Nuestros productos
                                </NavLink>
                                {/* Componente para versión móvil */}
                                {isDropdownOpen && (
                                    <div className="mobile-category-container">
                                        <ul className="mobile-category-list">
                                            {categorys.map(({ name, path }) => (
                                                <li className="mobileCategories" key={name}>
                                                    <NavLink to={path} onClick={() => { 
                                                        setIsDropdownOpen(false);
                                                        activateCategory(name);
                                                    }}>
                                                        {name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/contactos'} className={`nav-link-home ${activeLink === 'Contactos' ? 'active-link-contacts' : ''}`}
                                    onClick={() => {
                                        activateLink('Contactos');
                                        activateCategory(null);
                                    }}>
                                    Contactanos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {isDropdownOpen && (
                <div className="categoryMenu" ref={dropdownRef}>
                    {categorys.map(({ name, img, path }) => (
                        <div className="nav-item-category" key={name}>
                            <NavLink className="nav-link-category" to={path} onClick={() => activateCategory(name)}>
                                <div className="divImgCateg"><img src={img} alt={name} className={`imgCategory ${name === activeCategory ? 'active-link' : ''}`} />
                                </div>
                                <p className='nameCategory'>{name}</p>
                            </NavLink>
                        </div>
                    ))}
                </div>
            )}
        </header>
    )
}

export default NavbarBootstrap