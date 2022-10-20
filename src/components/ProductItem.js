import { Link } from 'react-router-dom';


const ProductItem = () => {

  return (
    <>
      <template data-js-item-template>
        <a href='./product.html?id={{id}}' data-js-product>
          <div class='product-slider'>
            <div class='product-slider-img-wrapper img-wrapper-width'>
              <img src='{{image}}' alt='' class='product-slider-img' />
            </div>
            <div class='content-product-slider'>
              <div class='category-product-slider'>{{ category }}</div>
              <div class='title-product-slider'>
                <h4>{{ title }}</h4>
              </div>
              <div class='price-product-slider'>{{ price }}$</div>
            </div>
          </div>
        </a>
      </template>
    </>
  )
};

export default ProductItem;
