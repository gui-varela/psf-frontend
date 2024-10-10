import { Link, animateScroll as scroll } from 'react-scroll'
import { PencilLine, House, Users, Calendar, Storefront, WhatsappLogo, Barbell, InstagramLogo, ClockAfternoon } from 'phosphor-react'; 

import styles from './Header.module.css' 
import logoPSF from '../assets/logo-psf.svg'
import logoPSFWhite from '../assets/logo-psf-white.svg'
import { useState } from 'react';

export function Header({isTransparent}) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <header className={isTransparent ? styles.transparentHeader : styles.header }>
      <img id="logo" src={isTransparent ? logoPSF : logoPSFWhite} className={styles.logo} alt="Logo Pro Skills Futsal" />
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
          <Link to="registration" spy={true} smooth={true} offset={0} duration={500}>
            <WhatsappLogo size={20} />
            <p>Contact us</p>
          </Link>
        </li>
      </ul>
      <aside className={styles.social}>
        <ul>
          <li>
            <a className={styles.cta} target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeS91fa-D4-1A3TWzHUY_-GrpKylc6eudjWKlsuXneouiwq1Q/viewform">
              <PencilLine size={20} />
              <p>Tryouts Registration</p>
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
