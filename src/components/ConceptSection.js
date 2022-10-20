import { Link } from 'react-router-dom';
import CercleFemmeImg from '../assets/images/img-accueil/cercle-femme.jpg'
import CercleHomeImg from '../assets/images/img-accueil/cercle-home-jungle.jpg'
import CerclePlantImg from '../assets/images/img-accueil/cercle-plante.jpg'

const ConceptSection = () => {
  return (
    <>
      <section className='concept-section'>
        <div className='relative-container'>
          <img
            src={CercleFemmeImg}
            alt=''
            className='concept-image-container concept-image-container--1'
          />
          <img
            src={CercleHomeImg}
            alt=''
            className='concept-image-container concept-image-container--2'
          />
          <img
            src={CerclePlantImg}
            alt=''
            className='concept-image-container concept-image-container--3'
          />
          <div className='heading-wrapper-centered'>
            <h2>
              Il suffit de quelques plantes pour se sentir chez soi.
              <br/>
              Laissez-vous guider !
            </h2>
            <div className='text-centered'>
              <Link to='./about'>
                <button className='btn btn--clair'>
                  <div className='btn-text'>Le concept</div>
                  <div className='btn-chevron'>
                    <i className='fas fa-chevron-right'></i>
                    <i className='fas fa-chevron-right'></i>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default ConceptSection;
