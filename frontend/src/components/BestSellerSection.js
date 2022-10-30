import React, { useState, useContext, useEffect, useRef } from 'react'
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

  function moveCarousel() {
    if (counter < 0 || counter >= featuredProducts.length) {
      setCounter(0)
    }
  }

  function moveToLeft() {
    if (counter > 0) {
      setCounter(counter - 1)
      moveCarousel()
    }
  }

  function moveToRight() {
    if (counter < featuredProducts.length - 1) {
      setCounter(counter + 1)
      moveCarousel()
    }
  }


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
              <i className='fas fa-chevron-left' onClick={moveToLeft}></i>
              <i className='fas fa-chevron-left' onClick={moveToLeft}></i>
            </div>
            <div className='arrows'>
              <i className='fas fa-chevron-right' onClick={moveToRight}></i>
              <i className='fas fa-chevron-right' onClick={moveToRight}></i>
            </div>
          </div>
          <div className='product-slider-wrapper'>
            {featuredProducts.length > 0
              ? featuredProducts.map((product) => (
                  <ProductItem
                    key={product._id}
                    product={product}
                    carousel={true}
                    counter={counter}
                  />
                ))
              : ''}
          </div>
        </div>
      </section>
    </>
  )
}

export default BestSellerSection
