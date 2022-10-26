import {productImages} from '../images'

const ShoppingList = ({product}) => {
  const { _id, name, quantity, image } = product;
  const imgName = image.split('/')[3].split('.')[0];
  return (
    <>
      <div className='shopping-list-item-wrapper'>
        <div className='shop-img-ctn'>
          <img src={productImages[imgName]} alt='' />
        </div>
        <div>
          <h4 data-js-item-id={_id}>{name}</h4>
          <span>Quantité : </span>
          <span>{quantity}</span>
        </div>
      </div>
    </>
  )
};

export default ShoppingList;
