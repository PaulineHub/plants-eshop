import { Link } from 'react-router-dom'
import mainsImg from '../assets/images/img-about/about-mains.jpg'
import terreImg from '../assets/images/img-about/terre.jpg'
import Hero from '../components/Hero'

const About = () => {
  return (
    <>
      <div className='nav-hider'></div>
      <Hero
        title='Notre histoire'
        subtitle='Comment tout a commencé...'
        imageClass='about'
      />
      <main className='flex-ctn'>
        <div className='side-img-ctn'>
          <div className='about-img-ctn--1'>
            <img src={mainsImg} alt='mains tenant une plante' />
          </div>
          <div className='about-img-ctn--2'>
            <img src={terreImg} alt='' />
          </div>
        </div>

        <section className='about-section'>
          <h2>Nos valeurs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quidem
            recusandae debitis maxime dolorum, ea at cumque unde, nobis
            laudantium odit earum porro saepe laborum tenetur consequuntur
            commodi repellat facilis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, error
            perspiciatis ad delectus numquam officia voluptatibus. Rem ducimus
            numquam quas aperiam minima dolorem voluptas, deleniti asperiores,
            assumenda nulla veniam officiis?
          </p>
          <h2>Notre concept</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quidem
            recusandae debitis maxime dolorum, ea at cumque unde, nobis
            laudantium odit earum porro saepe laborum tenetur consequuntur
            commodi repellat facilis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, error
            perspiciatis ad delectus numquam officia voluptatibus. Rem ducimus
            numquam quas aperiam minima dolorem voluptas, deleniti asperiores,
            assumenda nulla veniam officiis?
          </p>
          <Link to='./catalogue.html'>
            <button className='btn btn--clair'>
              <div className='btn-text'>Magasiner</div>
              <div className='btn-chevron'>
                <i className='fas fa-chevron-right'></i>
                <i className='fas fa-chevron-right'></i>
              </div>
            </button>
          </Link>
        </section>
      </main>
    </>
  )
}
export default About
