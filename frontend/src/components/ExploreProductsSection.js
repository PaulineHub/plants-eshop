import { Link } from 'react-router-dom'
import plants from '../assets/images/img-accueil/explore-plantes-470px.png'
import cactus from '../assets/images/img-accueil/explore-cactus-470px.png'
import flowers from '../assets/images/img-accueil/explore-fleurs-470px.png'
import React, { useContext } from 'react'
import { AppContext } from '../context'

const ExploreProductsSection = () => {
  const {updateSearchParams} = useContext(AppContext)
  return (
    <>
      <section className='explore-products-section container'>
        <div className='explore-products-heading'>
          <h2>Explore nos produits</h2>
        </div>
        <div className='explore-products-wrapper'>
          <div className='explore-product-category'>
            <Link
              to='/products#!/products?category=plantes'
              onClick={() => {
                updateSearchParams({ category: 'plantes' })
              }}
            >
              <div className='category-image-wrapper'>
                <img src={plants} alt='' className='explore-product-img' />
              </div>
              <div className='explore-product-category-title explore-product-category-title--plantes'>
                <h4>Plantes</h4>
              </div>
            </Link>
          </div>
          <div className='explore-product-category'>
            <Link
              to='/products#!/products?category=cactus'
              onClick={() => {
                updateSearchParams({ category: 'cactus' })
              }}
            >
              <div className='category-image-wrapper'>
                <img src={cactus} alt='' className='explore-product-img' />
              </div>
              <div className='explore-product-category-title explore-product-category-title--cactus'>
                <h4>Cactus</h4>
              </div>
            </Link>
          </div>
          <div className='explore-product-category'>
            <Link
              to='/products#!/products?category=fleurs'
              onClick={() => {
                updateSearchParams({ category: 'fleurs' })
              }}
            >
              <div className='category-image-wrapper'>
                <img src={flowers} alt='' className='explore-product-img' />
              </div>
              <div className='explore-product-category-title explore-product-category-title--fleurs-sechees'>
                <h4>Fleurs séchées</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExploreProductsSection
