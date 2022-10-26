import Pagination from './Pagination'
import ProductItem from './ProductItem'
import { useState, useContext } from 'react'
import { AppContext } from '../context'

const ProductsGrid = () => {

  const [error, setError] = useState();
  const { products } = useContext(AppContext)

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
