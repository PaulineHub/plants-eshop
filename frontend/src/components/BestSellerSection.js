import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context'
import ProductItem from './ProductItem'

const BestSellerSection = () => {
  const { products } = useContext(AppContext);
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    let bestProducts = [];
    if (products.length > 0) {
      bestProducts = products.filter(product => (product.featured === true))
    }
    setFeaturedProducts(bestProducts)
  }, [products])

  // function moveCarousel() {
  //   if (counter >= 0 && counter < featuredProducts.length) {
  //     const elProducts = document.querySelectorAll('[data-js-product]')
  //     elProducts.forEach((elProduct) => {
  //       elProduct.style.transform = `translateX(-${counter * 100}%)`
  //     })
  //   } else {
  //     counter = 0
  //   }
  // }

  // <ProductItem/> a linker dans le carousel

  return (
    <>
      <section className='product-slider-section'>
        <div className='description-product-slider-section'>
          <h3>Nos meilleures ventes</h3>
          <p>Peuplez votre maison avec nos plantes les plus appréciées.</p>
          <Link to='/products'>
            <button className='btn btn--product-slider'>
              <div className='btn-text'>Magasiner</div>
              <div className='btn-chevron'>
                <i className='fas fa-chevron-right'></i>
                <i className='fas fa-chevron-right'></i>
              </div>
            </button>
          </Link>
        </div>
        <div id='carousel-ctn'>
          <div className='arrow-wrapper'>
            <div className='arrows'>
              <i className='fas fa-chevron-left' data-js-left></i>
              <i className='fas fa-chevron-left' data-js-left></i>
            </div>
            <div className='arrows'>
              <i className='fas fa-chevron-right' data-js-right></i>
              <i className='fas fa-chevron-right' data-js-right></i>
            </div>
          </div>
          <div className='product-slider-wrapper'>
            {featuredProducts.length > 0
              ? featuredProducts.map((product) => (
                  <ProductItem key={product._id} product={product} carousel={true}/>
                ))
              : ''}
          </div>
        </div>
      </section>
    </>
  )
}

export default BestSellerSection
