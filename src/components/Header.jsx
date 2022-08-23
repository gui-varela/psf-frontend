import { Link, animateScroll as scroll } from 'react-scroll'
import { PencilLine, House, Users, Calendar, Storefront, WhatsappLogo, Barbell, InstagramLogo } from 'phosphor-react'; 

import styles from './Header.module.css' 
import logoPSF from '../assets/logo-psf.svg'

export function Header({isTransparent}) {
  return (
    <header className={isTransparent ? styles.transparentHeader : styles.header }>
      <img src={logoPSF} className={styles.logo} alt="Logo Pro Skills Futsal" />
      <ul>
        <li className='nav-item'>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
            <House size={20} />
            <p>Home</p>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="trainingProgram" spy={true} smooth={true} offset={-50} duration={500}>
            <Barbell size={20} />
            <p>Training Program</p>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="coachingStaff" spy={true} smooth={true} offset={-50} duration={500}>
            <Users size={20} />
            <p>Coaching Staff</p>
          </Link>
        </li>
        <li>
          <Link to="/" spy={true} smooth={true} offset={0} duration={500}>
            <Calendar size={20} />
            <p>Events</p>
          </Link>
        </li>
        <li>
          <Link to="registration" spy={true} smooth={true} offset={0} duration={500}>
            <WhatsappLogo size={20} />
            <p>Contact us</p>
          </Link>
        </li>
      </ul>
      <aside className={styles.social}>
        <ul>
          <li>
            <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfHNgHgoFXzi7mWOwsLmWC7mpbYZXkOUbK-8gbSSAMSh7GDpA/viewform">
              <PencilLine size={20} />
              <p>Registration</p>
            </a>
          </li>
          <li>
            <a href="http://">
              <Storefront size={24} />
              <p>Store</p>
            </a>
          </li>
          <li>
            <a target="blank" href="https://www.instagram.com/proskillsfutsal/">
              <InstagramLogo size={24} />
            </a>
          </li>
        </ul>
      </aside>
    </header>
  )
}
