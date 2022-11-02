import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../context'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import ShoppingList from './ShoppingList'


const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart, products, updateSearchParams, getSearchParamsFromUrl } = useContext(AppContext)
  const [cartProducts, setCartProducts] = useState([]);
  
  function displayMobileNav() {
    setActive(!isActive)
  }
  
  useEffect(() => {
    let list = [];
    if (cart.length > 0 && products.length > 0) {
      for (let item in cart) {
        for (let product in products) {
          if (products[product]._id === cart[item]._id) {
            list.push({
              _id: products[product]._id,
              name: products[product].name,
              image: products[product].image,
              quantity: cart[item].quantity
            })
          }
        }
      }
    }
    setCartProducts(list);
  }, [cart, products])

  function handleClickProducts() {
    updateSearchParams(getSearchParamsFromUrl);
  }

  return (
    <>
      <nav>
        <Link to='./'>
          <div className='logo-container'>
            <img src={logo} alt='' />
          </div>
        </Link>
        <div className={`menu ${isActive ? ' show-nav' : 'menu'}`}>
          <ul className='menuPrincipal'>
            <Link to='./products' onClick={handleClickProducts}>
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
            <i
              className='fas fa-shopping-bag dark-color'
              onMouseEnter={() => {
                cart.length > 0 ? setShowCart(true) : setShowCart(false)
              }}
              onMouseLeave={() => {
                setShowCart(false)
              }}
            ></i>
            <div
              className={`circle ${cart.length > 0 ? 'show-circle' : ''}`}
            ></div>
          </div>
        </div>
        <div className={`shopping-list ${showCart ? 'show-shop-list' : ''}`}>
          <h3>{`${
            cartProducts.length > 0 ? 'Votre panier' : ''
          }`}</h3>
          <div data-js-shop-list-ctn>
            {cartProducts.length > 0
              ? cartProducts.map((product) => (
                  <ShoppingList key={product._id} product={product} />
                ))
              : ''}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
