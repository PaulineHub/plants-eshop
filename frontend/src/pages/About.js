import { Link } from 'react-router-dom'
import aProposImg from '../assets/images/aPropos.jpg'

const About = () => {
  return (
    <>
      <div className='nav-hider'></div>
      <main>
        <div className='big-img-ctn'>
          <img src={aProposImg} alt='' />
        </div>
        <section className='about-section'>
          <h1>Notre histoire</h1>
          <h2>Comment tout a commencé</h2>
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
        </section>
        <div>
          <Link to='./catalogue.html'>
            <button className='btn btn--clair'>
              <div className='btn-text'>Magasiner</div>
              <div className='btn-chevron'>
                <i className='fas fa-chevron-right'></i>
                <i className='fas fa-chevron-right'></i>
              </div>
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}
export default About
