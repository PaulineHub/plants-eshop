const ProductDescription = ({product}) => {
  const { _id, category, name, price, description } = product;
  return (
    <div data-js-product-description-wrapper>
      <div className='all-caps'>{category}</div>
      <h3 data-js-product-id={_id}>{name}</h3>
      <div className='product-price-wrapper'>
        <div>{price}$</div>
        <div></div>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default ProductDescription
