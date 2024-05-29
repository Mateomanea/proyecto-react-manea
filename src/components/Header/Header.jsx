import React from 'react'
import Navbar from './Navbar';
import 'animate.css'

const Header = () => {

  return (
    <header className='header'>
        <div className="container">
            <h1 className='header__title animate__animated animate__fadeInTopLeft animate__fast'>
                LabTech
            </h1>
            <Navbar/>
        </div>
    </header>
  )

};

export default Header