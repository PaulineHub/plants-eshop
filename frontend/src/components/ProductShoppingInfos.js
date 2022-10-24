import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../context'

const ProductShoppingInfos = ({product}) => {

    const { _id, light, temperature } = product;
    const [quantity, setQuantity] = useState(1);
    const { updateCart } = useContext(AppContext)

    function decreaseQuantity() {
        if(quantity > 1) setQuantity(quantity - 1);
    }

    function increaseQuantity() {
      setQuantity(quantity + 1);
    }

    function addProductToBasket() {
        addToLocalStorage({_id, quantity});
    }

    function addToLocalStorage(item) {
        let items = getLocalStorage()
        let isUpdate = false;
        items.forEach((product) => {
          if (product._id === item._id) {
            product.quantity = parseInt(product.quantity) + parseInt(item.quantity)
            isUpdate = true;
          }
        })
        if (!isUpdate) items.push(item);
        localStorage.setItem('shoppingList', JSON.stringify(items))
        //update global cart in context file
        updateCart(items);
    }

    function getLocalStorage() {
        return localStorage.getItem('shoppingList') ? JSON.parse(localStorage.getItem('shoppingList')) : [];
    }

  return (
      <div>
          <div>
              <div role="group" className="option-btn-group">
                  <span className="option-label">Luminosité</span>
                  <div role="radiogroup" className="radio-group-option">
                      <div className={`option-button ${light === 1 ? 'option-selected' : ''}`}>
                        <i className="fas fa-cloud"></i>
                        </div>
                      <div className={`option-button ${light === 2 ? 'option-selected' : ''}`}>
                        <i className="fas fa-cloud-sun"></i>
                        </div>
                      <div className={`option-button ${light === 3 ? 'option-selected' : ''}`}>
                        <i className="fas fa-sun"></i>
                        </div>
                  </div>
              </div>
              <div role="group" className="option-btn-group">
                  <span className="option-label">Température</span>
                  <div role="radiogroup" className="radio-group-option">
                      <div className={`option-button ${temperature === 1 ? 'option-selected' : ''}`}>
                        <i className="fas fa-thermometer-empty"></i>
                        </div>
                      <div className={`option-button ${temperature === 2 ? 'option-selected' : ''}`}>
                        <i className="fas fa-thermometer-half"></i>
                        </div>
                      <div className={`option-button ${temperature === 3 ? 'option-selected' : ''}`}>
                        <i className="fas fa-thermometer-full"></i>
                        </div>
                  </div>
              </div>
          </div>
          <div className="product-addToCart-wrapper">
              <div className="quantity-wrapper">
                  <div className="quantity-decrement" onClick={decreaseQuantity}>-</div>
                  <input type="number" readOnly value={quantity} min="1" name="add-to-cart-quantity-input" className="quantity-number"/>
                  <div className="quantity-increment"  onClick={increaseQuantity}>+</div>
              </div>
              <div className="btn" onClick={addProductToBasket}>
                  <div className="button-text">Ajouter au panier</div>
                  <div className="btn-chevron">
                      <i className="fas fa-chevron-right" ></i><i className="fas fa-chevron-right" ></i>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ProductShoppingInfos
