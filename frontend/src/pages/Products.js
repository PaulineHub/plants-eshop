import Hero from '../components/Hero'
import Filters from '../components/Filters'
import ProductsGrid from '../components/ProductsGrid'

const Products = () => {
  return (
    <>
      <Hero
        title='Nos Produits'
        subtitle='Transformer votre intérieur en jungle avec nos assortiments de
              plantes, cactus et fleurs séchées.'
        imageClass='products'
      />
      <Filters />
      <ProductsGrid />
    </>
  )
}
export default Products
