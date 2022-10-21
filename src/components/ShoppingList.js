import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const ShoppingList = () => {
  const {name, quant, image} = ''
  return (
    <>
      <div class="shopping-list-item-wrapper">
        <div class="shop-img-ctn">
            <img src={image} alt=""/>
        </div>
        <div>
            <h4 data-js-item-id="{{_id}}">{name}</h4>
            <span>Quantité : </span><span>{quant}</span>
        </div>
      </div>
    </>
  )
};

export default ShoppingList;
