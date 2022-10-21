import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import React, { useState } from 'react'

const Navbar = () => {
    const [isActive, setActive] = useState(false)
    const displayMobileNav = () => {
        setActive(!isActive)
    }
    return (
      <nav>
        <Link to='./'>
          <div className='logo-container'>
            <img src={logo} alt='' />
          </div>
        </Link>
        <div className={`menu ${isActive ? ' show-nav' : 'menu'}`}>
          <ul className='menuPrincipal'>
            <Link to='./products'>
              <li className='menuPrincipalLi dark-color'>Nos Produits</li>
            </Link>
            <Link to='./about'>
              <li className='menuPrincipalLi dark-color'>A Propos</li>
            </Link>
          </ul>
        </div>
        <div className='fas-wrapper'>
          <i className='fas fa-bars dark-color' onClick={displayMobileNav}></i>
          <div className='shop-icon-ctn'>
            <i className='fas fa-shopping-bag dark-color'></i>
            <div className='circle'></div>
          </div>
        </div>
        <div className='shopping-list' data-js-shop-list-big-ctn>
          <h3></h3>
          <div data-js-shop-list-ctn></div>
        </div>
      </nav>
    )
};

export default Navbar;
