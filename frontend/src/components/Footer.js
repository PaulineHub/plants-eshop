import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-dark.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-top-row'>
          <Link to='/'>
            <div className='logo-container logo-container--footer'>
              <img src={logo} alt='' />
            </div>
          </Link>
          <div className='footer-social-wrapper'>
            <Link to='#' className='extra-padding-right'>
              Instagram
            </Link>
            <Link to='#'>Facebook</Link>
          </div>
        </div>
        <div className='footer-mid-row layout-grid'>
          <div className='footer-menu-wrapper'>
            <div className='footer-menu-heading'>
              <h5>Magasiner</h5>
            </div>
            <div>
              <ul>
                <Link to='./catalogue'>
                  <li>Magasiner tout</li>
                </Link>
                <Link to='./catalogue?#!category=plantes'>
                  <li>Plantes</li>
                </Link>
                <Link to='./catalogue?#!category=cactus'>
                  <li>Cactus</li>
                </Link>
                <Link to='./catalogue?#!category=fleurs'>
                  <li>Fleurs séchées</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className='footer-menu-wrapper'>
            <div className='footer-menu-heading'>
              <h5>A Propos</h5>
            </div>
            <div>
              <ul>
                <Link to='/about'>
                  <li>Notre histoire</li>
                </Link>
                <Link to='#'>
                  <li>Nos valeurs</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className='footer-menu-wrapper'>
            <div className='footer-menu-heading'>
              <h5>Service Client</h5>
            </div>
            <div>
              <ul>
                <Link to='#'>
                  <li>Contactez-nous</li>
                </Link>
                <Link to='./faq.html'>
                  <li>FAQs</li>
                </Link>
                <Link to='#'>
                  <li>Retours & Echanges</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-end-row'>
          <div>
            <p className='footer-p'>
              Ceci est un faux site d'e-commerce pour un projet en développement
              web.
            </p>
          </div>
          <div>
            <p className='footer-p'>
              Design original du site{' '}
              <Link to='https://www.twigspaper.com/' target='_blank'>
                Twigs Paper
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
