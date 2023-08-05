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
        <li 
          onMouseOver={() => setShowTooltip(true)} 
          onMouseLeave={() => setShowTooltip(false)}  
          className={styles.events}
        >
          <Link to="/" spy={true} smooth={true} offset={0} duration={500} >
            <Calendar size={20} />
            <p>Events</p>
          </Link>
          <div className={ showTooltip ? styles.inProgress : styles.transparent }>
            <span><ClockAfternoon size={20} /><i>In progress</i></span>
          </div>
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
            <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfT2BQ9f1yYIM_ISU_7xioGSdsfacGxcPCF8_BDOEX0uSIjHw/viewform?fbclid=IwAR1Y5-uxfl-C-fHtN0nNdLw4KJNpBN39xr0Gj219VzNutJCeZpUI7WFmGAo">
              <PencilLine size={20} />
              <p>Registration</p>
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
