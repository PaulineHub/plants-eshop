import AccordionInformations from "../components/AccordionInformations";
import ProductDescription from "../components/ProductDescription";
import ProductImages from "../components/ProductImages";
import ProductShoppingInfos from "../components/ProductShoppingInfos";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../api'

const SingleProduct = () => {
    const [product, setProduct] = useState()
    const [detailImages, setDetailImages] = useState()
    const [error, setError] = useState()
    const url = window.location.pathname;
    const id = url.split('/')[2];

    // get infos of the product
    useEffect(() => {
      api
        .getSingleProduct(id)
        .then((product) => {
          setProduct(product)
          let category = product.category;
          return api.getProductDetailImages({ category })
        })
        .then((images) => {
          setDetailImages(images)
        })
        .catch((e) => {
          setError(e)
        })
    }, [])
    // loading for the first render before having data from the api
    if (!product || !detailImages) {
      return 'loading'
    }
    
  return (
    <section className='section container no-padding-mobile no-margin-tb-mobile'>
      <div className='go-back-wrapper'>
        <Link to='/products' className='black go-back-wrapper-a'>
          <div className='btn-chevron tiny-chevron'>
            <i className='fas fa-chevron-left'></i>
            <i className='fas fa-chevron-left'></i>
          </div>
          <div className='go-back-text'>Retour</div>
        </Link>
      </div>
      <div className='product-description-wrapper'>
        <ProductImages image={product.image} detailImages={detailImages} />
        <div className='product-description-content-wrapper'>
          <ProductDescription product={product} />
          <ProductShoppingInfos product={product} />
          <AccordionInformations />
        </div>
      </div>
    </section>
  )
};
export default SingleProduct;
