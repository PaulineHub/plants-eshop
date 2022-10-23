import Pagination from './Pagination'
import ProductItem from './ProductItem'
import { useState, useEffect } from 'react'
import { api } from '../api'

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    api
      .getProducts()
      .then((products) => {
        setProducts(products)
      })
      .catch((e) => {
        setError(e)
      })
  }, [])
  // console.log('products:', products)

  if (error) {
    return 'Enable to fetch the products!'
  }

  return (
    <div className='container section no-padding-mobile'>
      <div role='list' className='products-list' data-js-products-wrapper>
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
      {/* <Pagination /> */}
    </div>
  )
}

export default ProductsGrid
