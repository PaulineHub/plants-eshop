import { Link } from 'react-router-dom';
import { productImages } from '../images'

const ProductItem = ({product}) => {
  const {_id, category, name, image, price} = product; 
  const imgName = image.split('/')[3].split('.')[0];

  return (
    <>
      <div role='listitem' id={_id}>
        <Link to={`/products/${_id}`}>
          <div className='product-slider'>
            <div className='product-slider-img-wrapper'>
              <img
                src={productImages[imgName]}
                alt=''
                className='product-slider-img no-min-width'
              />
            </div>
            <div className='content-product-slider'>
              <div className='category-product-slider'>{category}</div>
              <div className='title-product-slider'>
                <h4>{name}</h4>
              </div>
              <div className='price-product-slider'>{price}$</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
};

export default ProductItem;
