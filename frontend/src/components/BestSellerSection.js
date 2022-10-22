import React from 'react'
import { Link } from 'react-router-dom'
// import ProductItem from './ProductItem'

const BestSellerSection = () => {
  // <ProductItem/> a linker dans le carousel

  return (
    <>
      <section class='product-slider-section'>
        <div class='description-product-slider-section'>
          <h3>Nos meilleures ventes</h3>
          <p>Peuplez votre maison avec nos plantes les plus appréciées.</p>
          <Link to='/products'>
            <button class='btn btn--product-slider'>
              <div class='btn-text'>Magasiner</div>
              <div class='btn-chevron'>
                <i class='fas fa-chevron-right'></i>
                <i class='fas fa-chevron-right'></i>
              </div>
            </button>
          </Link>
        </div>
        <div id='carousel-ctn'>
          <div class='arrow-wrapper'>
            <div class='arrows'>
              <i class='fas fa-chevron-left' data-js-left></i>
              <i class='fas fa-chevron-left' data-js-left></i>
            </div>
            <div class='arrows'>
              <i class='fas fa-chevron-right' data-js-right></i>
              <i class='fas fa-chevron-right' data-js-right></i>
            </div>
          </div>
          <div class='product-slider-wrapper' data-js-products-wrapper></div>
        </div>
      </section>
    </>
  )
}

export default BestSellerSection
