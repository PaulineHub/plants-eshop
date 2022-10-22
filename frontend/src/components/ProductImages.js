const ProductImages = () => {
  const {image1, image2, image3} = "";
  return (
      <div class="product-description-images-wrapper" data-js-description-images-wrapper>    
        <img src={image1} alt="" class="product-image-description"/>
        <div class="image-gallery-collection-list">
            <div role="list">
                <div role="listitem" class="image-gallery-item">
                    <img src={image2} alt="" class="product-image-description"/>
                </div>
                <div role="listitem" class="image-gallery-item">
                    <img src={image3} alt="" class="product-image-description"/>
                </div>
            </div>
        </div> 
      </div>
  )
}

export default ProductImages
