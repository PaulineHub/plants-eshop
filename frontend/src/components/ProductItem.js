import { Link } from 'react-router-dom';
import plante1 from '../assets/images/img-produits/plante1.jpg';
import plante2 from '../assets/images/img-produits/plante2.jpg';
import plante3 from '../assets/images/img-produits/plante3.jpg';
import plante4 from '../assets/images/img-produits/plante4.jpg';
import plante5 from '../assets/images/img-produits/plante5.jpg';
import plante6 from '../assets/images/img-produits/plante6.jpg';
import cactus1 from '../assets/images/img-produits/cactus1.jpg';
import cactus2 from '../assets/images/img-produits/cactus2.jpg';
import cactus3 from '../assets/images/img-produits/cactus3.jpg';
import cactus4 from '../assets/images/img-produits/cactus4.jpg';
import cactus5 from '../assets/images/img-produits/cactus5.jpg';
import cactus6 from '../assets/images/img-produits/cactus6.jpg';
import fleur1 from '../assets/images/img-produits/fleur1.jpg';
import fleur2 from '../assets/images/img-produits/fleur2.jpg';
import fleur3 from '../assets/images/img-produits/fleur3.jpg';
import fleur4 from '../assets/images/img-produits/fleur4.jpg';
import fleur5 from '../assets/images/img-produits/fleur5.jpg';
import fleur6 from '../assets/images/img-produits/fleur6.jpg';

const ProductItem = ({product}) => {
  const {_id, category, name, image, price} = product; 
  const images = {
    plante1, plante2, plante3, plante4, plante5, plante6, 
    cactus1, cactus2, cactus3, cactus4, cactus5, cactus6, 
    fleur1, fleur2, fleur3, fleur4, fleur5, fleur6
  };
  const imgName = image.split('/')[3].split('.')[0];

  return (
    <>
      <div role='listitem' id={_id}>
        <Link to={`/products/${_id}`}>
          <div className='product-slider'>
            <div className='product-slider-img-wrapper'>
              <img
                src={images[imgName]}
                alt=''
                className='product-slider-img no-min-width'
              />
            </div>
            <div className='content-product-slider'>
              <div className='category-product-slider'>{category}</div>
              <div className='title-product-slider'>
                <h4>{name}</h4>
              </div>
              <div className='price-product-slider'>{price}$</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
};

export default ProductItem;
