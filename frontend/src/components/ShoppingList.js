import logo from '../assets/images/logo.png'

const ShoppingList = () => {
  const {_id, name, quant, image} = ''
  return (
    <>
      <div className="shopping-list-item-wrapper">
        <div className="shop-img-ctn">
            <img src="" alt=""/>
        </div>
        <div>
            <h4 data-js-item-id={_id}>{name}</h4>
            <span>Quantité : </span><span>{quant}</span>
        </div>
      </div>
    </>
  )
};

export default ShoppingList;
