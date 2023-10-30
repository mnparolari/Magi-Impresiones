import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import souvenirImg from '../../../assets/images/souvenirDefault.png';
import papeleriaImg from '../../../assets/images/papeleriaDefault.png';
import regalosImg from '../../../assets/images/regalosespecialesDefault.png';
import textilImg from '../../../assets/images/remeraDefault.png';
import mateImg from '../../../assets/images/mateDefault.png';
import beberImg from '../../../assets/images/botellaDefault.png';
import mascotasImg from '../../../assets/images/mascotaDefault.png';
import souvenirHover from '../../../assets/images/souvenirHovered.png';
import souvenirActive from '../../../assets/images/souvenirActive.png';
import souvenirPressed from '../../../assets/images/souvenirPressed.png';
import papeleriaHover from '../../../assets/images/papeleriaHovered.png';
import papeleriaActive from '../../../assets/images/papeleriaActive.png';
import papeleriaPressed from '../../../assets/images/papeleriaPressed.png';
import regalosHover from '../../../assets/images/regalosespecialesHovered.png';
import regalosActive from '../../../assets/images/regalosespecialesActive.png';
import regalosPressed from '../../../assets/images/regalosespecialesPressed.png';
import textilHover from '../../../assets/images/remeraHovered.png';
import textilActive from '../../../assets/images/remeraActive.png';
import textilPressed from '../../../assets/images/remeraPressed.png';
import mateHover from '../../../assets/images/mateHovered.png';
import mateActive from '../../../assets/images/mateActive.png';
import matePressed from '../../../assets/images/matePressed.png';
import botellaHover from '../../../assets/images/botellaHovered.png';
import botellaActive from '../../../assets/images/botellaActive.png';
import botellaPressed from '../../../assets/images/botellaPressed.png';
import mascotaHover from '../../../assets/images/mascotaHovered.png';
import mascotaActive from '../../../assets/images/mascotaActive.png';
import mascotaPressed from '../../../assets/images/mascotaPressed.png';
import logo from '../../../assets/images/logomagi.png';
import '../../../scss/components/_navbarBootstrap.scss'
import '../../../scss/base/_mediaquery.scss'

const categorys = [
    {
        name: 'Souvenir',
        img: souvenirImg,
        imgHover: souvenirHover,
        imgClick: souvenirPressed,
        imgActive: souvenirActive,
        path: '/productos/souvenir'
    },
    {
        name: 'Papelería',
        img: papeleriaImg,
        imgHover: papeleriaHover,
        imgClick: papeleriaPressed,
        imgActive: papeleriaActive,
        path: '/productos/papeleria'
    },
    {
        name: 'Regalos especiales',
        img: regalosImg,
        imgHover: regalosHover,
        imgClick: regalosPressed,
        imgActive: regalosActive,
        path: '/productos/regalosespeciales'
    },
    {
        name: 'Textiles',
        img: textilImg,
        imgHover: textilHover,
        imgClick: textilPressed,
        imgActive: textilActive,
        path: '/productos/textiles'
    },
    {
        name: 'Momento del mate',
        img: mateImg,
        imgHover: mateHover,
        imgClick: matePressed,
        imgActive: mateActive,
        path: '/productos/momentomate'
    },
    {
        name: 'Para beber',
        img: beberImg,
        imgHover: botellaHover,
        imgClick: botellaPressed,
        imgActive: botellaActive,
        path: '/productos/parabeber'
    },
    {
        name: 'Mascotas',
        img: mascotasImg,
        imgHover: mascotaHover,
        imgClick: mascotaPressed,
        imgActive: mascotaActive,
        path: '/productos/mascotas'
    }
]

const NavbarBootstrap = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [clickedCategory, setClickedCategory] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const bodyRef = useRef(document.body);


    const closeMenu = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && navbarToggler.getAttribute("aria-expanded") === "true") {
            navbarToggler.click();
        }
    };

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

        if (!isDropdownOpen) {
            bodyRef.current.classList.add('body-hidden');
        } else {
            bodyRef.current.classList.remove('body-hidden');
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);

        if (!isMobileMenuOpen) {
            bodyRef.current.classList.add('body-hidden');
        } else {
            bodyRef.current.classList.remove('body-hidden');
        }
    };


    const activateLink = (linkName) => {
        setActiveLink(linkName);
    };

    const handleMouseEnter = (categoryName) => {
        setHoveredCategory(categoryName);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    const handleCategoryClick = (categoryName) => {
        setClickedCategory(categoryName);
    };

    const activateCategory = (categoryName) => {
        setActiveCategory(categoryName);
    };

    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === "/") {
            setActiveLink('Inicio');
        } else if (currentPath === "/sobremagi") {
            setActiveLink('SobreMagi');
        } else if (currentPath === "/contactos") {
            setActiveLink('Contactos');
        } else if (isDropdownOpen) {
            setActiveLink('NuestroProductos');
        }
    }, [location, isDropdownOpen]);



    return (
        <header>
            <nav className="navbar navbar-expand-lg" id='navbar-navbar'>
                <div className="container-fluid">
                    <div className="container-mobile">
                        <div className="container">
                            <Link to={"/"} className="nav-link-logo" onClick={() => closeMenu()}>
                                <img src={logo} alt="StoreLogo" className="logo" />
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" onClick={toggleMobileMenu} data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"> ☰ </span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="navbar-nav">
                            <div className='closeContainer'>
                                <button type="button" className="btn-close custom-close-button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Close"></button>
                            </div>
                            <div className="nav-item" id="inicio">
                                <NavLink to={'/'} className={`nav-link-home ${activeLink === 'Inicio' ? 'active-link-home' : ''}`}
                                    onClick={() => {
                                        activateLink('Inicio');
                                        activateCategory(null);
                                        closeMenu();
                                    }}>
                                    Inicio</NavLink>
                            </div>
                            <div className="nav-item" id="aboutmagi">
                                <NavLink to={'/sobremagi'} className={`nav-link-about ${activeLink === 'SobreMagi' ? 'active-link-about' : ''}`}
                                    onClick={() => {
                                        activateLink('SobreMagi');
                                        activateCategory(null);
                                        closeMenu();
                                    }}
                                    style={{ whiteSpace: 'nowrap' }}>
                                    Sobre <span className='magiFontNav'>magi</span></NavLink>
                            </div>
                            <div className="nav-item" id="nuestrosprods">
                                <NavLink to={'/productos'} className={`nav-link-products ${activeLink === 'NuestroProductos' ? 'active-link-products' : ''}`}
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
                                                    <NavLink className="mobile-link" to={path} onClick={() => {
                                                        setIsDropdownOpen(false);
                                                        activateCategory(name);
                                                        closeMenu();
                                                    }}>
                                                        {name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="nav-item" id="contactos">
                                <NavLink to={'/contactos'} id="contactanos" className={`nav-link-contacts ${activeLink === 'Contactos' ? 'active-link-contacts' : ''}`}
                                    onClick={() => {
                                        activateLink('Contactos');
                                        activateCategory(null);
                                        closeMenu();
                                    }}>
                                    Contactanos</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {isDropdownOpen && (
                <div className="categoryMenu" ref={dropdownRef}>
                    {categorys.map(({ name, img, imgHover, imgClick, imgActive, path }) => (
                        <div className="nav-item-category" key={name}>
                            <NavLink className="nav-link-category" to={path} onClick={() => handleCategoryClick(name)} onMouseUp={() => activateCategory(name)}>
                                <div className="divImgCateg">
                                    <img
                                        src={
                                            name === activeCategory
                                                ? imgActive
                                                : name === clickedCategory
                                                    ? imgClick
                                                    : name === hoveredCategory
                                                        ? imgHover
                                                        : img
                                        }
                                        alt={name}
                                        className="imgCategory"
                                        onMouseEnter={() => handleMouseEnter(name)}
                                        onMouseLeave={handleMouseLeave}
                                        onMouseUp={() => activateCategory(name)}
                                    />
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