import instaCircle from '../assets/images/img-accueil/instagram-circle.svg'
import insta1 from '../assets/images/img-accueil/insta1-500px.jpg'
import insta2 from '../assets/images/img-accueil/insta2-500px.jpg'
import insta3 from '../assets/images/img-accueil/insta3-500px.jpg'
import insta4 from '../assets/images/img-accueil/insta4-500px.jpg'
import insta5 from '../assets/images/img-accueil/insta5-440px.jpg'
import insta6 from '../assets/images/img-accueil/insta6-440px.jpg'
import insta7 from '../assets/images/img-accueil/insta7-440px.jpg'

const InstagramSection = () => {
  return (
    <>
      <section className='instagram-section'>
        <div className='heading-wrapper-centered heading-wrapper-centered--insta'>
          <img src={instaCircle} alt='Suis notre aventure' className='rotate' />
          <div className='divider-line'></div>
          <h3>
            Viens nous faire un coucou et jeter un oeil à nos actualités
            @lamaisonjungle
          </h3>
        </div>
        <div className='instagram-grid'>
          <img src={insta5} alt='' className='image-cover ig-image ig-image--01' />
          <img src={insta6} alt='' className='image-cover ig-image ig-image--02' />
          <img src={insta7} alt='' className='image-cover ig-image ig-image--03' />
          <img src={insta1} alt='' className='image-cover ig-image ig-image--04' />
          <img src={insta2} alt='' className='image-cover ig-image ig-image--05' />
          <img src={insta3} alt='' className='image-cover ig-image ig-image--06' />
          <img src={insta4} alt='' className='image-cover ig-image ig-image--07' />
        </div>
      </section>
    </>
  )
}

export default InstagramSection
