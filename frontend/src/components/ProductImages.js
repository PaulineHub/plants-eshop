import plante1 from '../assets/images/img-produits/plante1.jpg'
import plante2 from '../assets/images/img-produits/plante2.jpg'
import plante3 from '../assets/images/img-produits/plante3.jpg'
import plante4 from '../assets/images/img-produits/plante4.jpg'
import plante5 from '../assets/images/img-produits/plante5.jpg'
import plante6 from '../assets/images/img-produits/plante6.jpg'
import plante7 from '../assets/images/img-produits/plante7.jpg'
import plante8 from '../assets/images/img-produits/plante8.jpg'
import cactus1 from '../assets/images/img-produits/cactus1.jpg'
import cactus2 from '../assets/images/img-produits/cactus2.jpg'
import cactus3 from '../assets/images/img-produits/cactus3.jpg'
import cactus4 from '../assets/images/img-produits/cactus4.jpg'
import cactus5 from '../assets/images/img-produits/cactus5.jpg'
import cactus6 from '../assets/images/img-produits/cactus6.jpg'
import cactus7 from '../assets/images/img-produits/cactus7.jpg'
import cactus8 from '../assets/images/img-produits/cactus8.jpg'
import fleur1 from '../assets/images/img-produits/fleur1.jpg'
import fleur2 from '../assets/images/img-produits/fleur2.jpg'
import fleur3 from '../assets/images/img-produits/fleur3.jpg'
import fleur4 from '../assets/images/img-produits/fleur4.jpg'
import fleur5 from '../assets/images/img-produits/fleur5.jpg'
import fleur6 from '../assets/images/img-produits/fleur6.jpg'
import fleur7 from '../assets/images/img-produits/fleur7.jpg'
import fleur8 from '../assets/images/img-produits/fleur8.jpg'


const ProductImages = (props) => {
    const {image, detailImages} = props
    const images = {
      plante1,
      plante2,
      plante3,
      plante4,
      plante5,
      plante6,
      plante7, 
      plante8,
      cactus1,
      cactus2,
      cactus3,
      cactus4,
      cactus5,
      cactus6,
      cactus7, 
      cactus8,
      fleur1,
      fleur2,
      fleur3,
      fleur4,
      fleur5,
      fleur6,
      fleur7, 
      fleur8
    }

    const image1 = image.split('/')[3].split('.')[0]
    const image2 = detailImages.src[0].split('/')[3].split('.')[0]
    const image3 = detailImages.src[1].split('/')[3].split('.')[0]
  
  return (
    <div
      className='product-description-images-wrapper'
      data-js-description-images-wrapper
    >
      <img src={images[image1]} alt='' className='product-image-description' />
      <div className='image-gallery-collection-list'>
        <div role='list'>
          <div role='listitem' className='image-gallery-item'>
            <img
              src={images[image2]}
              alt=''
              className='product-image-description'
            />
          </div>
          <div role='listitem' className='image-gallery-item'>
            <img
              src={images[image3]}
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
