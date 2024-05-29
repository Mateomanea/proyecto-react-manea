import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar__list'>
            <li><a className='navbar__link' href="#">Inicio</a></li>
            <li><a className='navbar__link' href="#">Tienda</a></li>
            <li><a className='navbar__link' href="#">Contacto</a></li>
        </ul>

        <div className='dashboard'>
            <ul className='navbar__list'>
                <li>
                    <a className='navbar__link' href="#">
                        Buscar
                        <i class="navbar__link--icon fa-solid fa-magnifying-glass"></i>
                    </a>
                </li>
                <li><a className='navbar__link' href="#">Login</a></li>
                <li>
                    <a className='navbar__link navbar__link--cart' href="#">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span className='navbar__link--cartCount'>2</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
};

export default Navbar