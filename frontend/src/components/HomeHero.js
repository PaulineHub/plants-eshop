import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <>
      <section className='main-hero-section'>
        <div className='hero-bcg-wrapper'></div>
        <div className='titleContent'>
          <h1 className='main-hero-title'>
            Transformez votre maison en jungle
          </h1>
          <Link to='./products'>
            <button className='btn'>
              <div className='btn-text'>Magasiner</div>
              <div className='btn-chevron'>
                <i className='fas fa-chevron-right'></i>
                <i className='fas fa-chevron-right'></i>
              </div>
            </button>
          </Link>
        </div>
        <section className='review-ruban'>
          <p>
            Retour Client{' '}
            <span className='stars-block'>
              <i className='fas fa-star'></i> <i className='fas fa-star'></i>{' '}
              <i className='fas fa-star'></i> <i className='fas fa-star'></i>{' '}
              <i className='fas fa-star'></i>{' '}
            </span>{' '}
            basé sur plus de 150 revues
          </p>
        </section>
      </section>
    </>
  )
};

export default HomeHero;
