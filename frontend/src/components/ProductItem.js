import { Link } from 'react-router-dom';
import { productImages } from '../images'


const ProductItem = ({product, carousel, counter}) => {
  const { _id, category, name, image, price } = product
  const imgName = image.split('/')[3].split('.')[0]

const transformStyle = {
  transform: `translateX(-${counter * 100}%)`,
}
  return (
    <>
      <div
        role='listitem'
        id={_id}
        style={transformStyle}
      >
        <Link to={`/products/${_id}`}>
          <div className='product-slider'>
            <div
              className={`product-slider-img-wrapper ${
                carousel ? 'img-wrapper-width' : ''
              }`}
            >
              <img
                src={productImages[imgName]}
                alt={name}
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
