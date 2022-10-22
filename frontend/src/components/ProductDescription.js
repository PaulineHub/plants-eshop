const ProductDescription = () => {
  return (
      <div data-js-product-description-wrapper>
        <div class="all-caps">{category}</div>
        <h3 data-js-product-id="{{id}}">{name}</h3>
        <div class="product-price-wrapper">
            <div>{price}$</div>
            <div></div>
        </div>
        <p>{description}</p>
      </div>
                
  )
}

export default ProductDescription
