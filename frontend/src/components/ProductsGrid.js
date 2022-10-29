import Pagination from './Pagination'
import ProductItem from './ProductItem'
import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../context'

const ProductsGrid = () => {

  const [error, setError] = useState();
  const { filteredProducts, pages, searchParams } = useContext(AppContext)

  if (error) {
    return 'Enable to fetch the products!'
  }

  if (!filteredProducts ||filteredProducts.length < 1) {
    return <div>Loading</div>
  }
    return (
      <div className='container section no-padding-mobile'>
        <div role='list' className='products-list'>
          {filteredProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
        <div className='pagination'>
          {pages.map((page) => {
            let isPageActive = false;
            if (!searchParams.page) {
              if (page === 1) isPageActive = true
            } else {
              if (page == searchParams.page) isPageActive = true
            }
            return (
              <Pagination
                key={page}
                number={page}
                isPageActive={isPageActive}
              />
            )
          })}
        </div>
      </div>
    )
}

export default ProductsGrid
