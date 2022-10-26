import { productImages } from '../images'

const ProductImages = (props) => {
    const {image, detailImages} = props
    const image1 = image.split('/')[3].split('.')[0]
    const image2 = detailImages.src[0].split('/')[3].split('.')[0]
    const image3 = detailImages.src[1].split('/')[3].split('.')[0]
  
  return (
    <div
      className='product-description-images-wrapper'
      data-js-description-images-wrapper
    >
      <img src={productImages[image1]} alt='' className='product-image-description' />
      <div className='image-gallery-collection-list'>
        <div role='list'>
          <div role='listitem' className='image-gallery-item'>
            <img
              src={productImages[image2]}
              alt=''
              className='product-image-description'
            />
          </div>
          <div role='listitem' className='image-gallery-item'>
            <img
              src={productImages[image3]}
              alt=''
              className='product-image-description'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductImages
