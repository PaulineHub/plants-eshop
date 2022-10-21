import Pagination from './Pagination'
import ProductItem from './ProductItem';

const ProductsGrid = () => {
  // boucle pour passer params a chaque product item
  return (
    <div class='container section no-padding-mobile'>
      <div role='list' class='products-list' data-js-products-wrapper></div>
      <ProductItem />
      <Pagination />
    </div>
  )
};

export default ProductsGrid;
