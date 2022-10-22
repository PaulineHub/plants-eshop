import { Link } from 'react-router-dom';


const ProductItem = () => {
  const [id, category, title, image, price] = ''; // pour eviter erreurs
  return (
    <>
        <div role='listitem' id={id}>
          <Link to='./product.html?id={id}'>
            <div className='product-slider'>
              <div className='product-slider-img-wrapper'>
                <img
                  src={image}
                  alt=''
                  className='product-slider-img no-min-width'
                />
              </div>
              <div className='content-product-slider'>
                <div className='category-product-slider'>{ category }</div>
                <div className='title-product-slider'>
                  <h4>{ title }</h4>
                </div>
                <div className='price-product-slider'>{ price }$</div>
              </div>
            </div>
          </Link>
        </div>
    </>
  )
};

export default ProductItem;
