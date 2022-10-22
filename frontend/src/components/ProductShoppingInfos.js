

const ProductShoppingInfos = () => {
  return (
      <div>
          <div>
              <div role="group" class="option-btn-group">
                  <span class="option-label">Luminosité</span>
                  <div role="radiogroup" class="radio-group-option">
                      <div class="option-button" data-js-light data-js-option = '1'><i class="fas fa-cloud"></i></div>
                      <div class="option-button" data-js-light data-js-option = '2'><i class="fas fa-cloud-sun"></i></div>
                      <div class="option-button" data-js-light data-js-option = '3'><i class="fas fa-sun"></i></div>
                  </div>
              </div>
              <div role="group" class="option-btn-group">
                  <span class="option-label">Température</span>
                  <div role="radiogroup" class="radio-group-option">
                      <div class="option-button" data-js-temperature data-js-option = '1'><i class="fas fa-thermometer-empty"></i></div>
                      <div class="option-button" data-js-temperature data-js-option = '2'><i class="fas fa-thermometer-half"></i></div>
                      <div class="option-button" data-js-temperature data-js-option = '3'><i class="fas fa-thermometer-full"></i></div>
                  </div>
              </div>
          </div>
          <div class="product-addToCart-wrapper">
              <div class="quantity-wrapper">
                  <div class="quantity-decrement" data-js-quantity-decrement>-</div>
                  <input type="number" value="1" min="1" name="add-to-cart-quantity-input" class="quantity-number" data-js-quantity-value/>
                  <div class="quantity-increment" data-js-quantity-increment>+</div>
              </div>
              <div class="btn" data-js-btn-add-basket>
                  <div class="button-text">Ajouter au panier</div>
                  <div class="btn-chevron">
                      <i class="fas fa-chevron-right" ></i><i class="fas fa-chevron-right" ></i>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ProductShoppingInfos
