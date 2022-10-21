import { Link } from 'react-router-dom';


const ProductItem = () => {

  return (
    <>
      <template data-js-item-template>
        <div role='listitem' id='{{id}}'>
          <Link to='./product.html?id={{id}}'>
            <div class='product-slider'>
              <div class='product-slider-img-wrapper'>
                <img
                  src='{{image}}'
                  alt=''
                  class='product-slider-img no-min-width'
                />
              </div>
              <div class='content-product-slider'>
                <div class='category-product-slider'>{{ category }}</div>
                <div class='title-product-slider'>
                  <h4>{{ title }}</h4>
                </div>
                <div class='price-product-slider'>{{ price }}$</div>
              </div>
            </div>
          </Link>
        </div>
      </template>
    </>
  )
};

export default ProductItem;
