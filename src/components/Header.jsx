import { PencilLine, House, Users, Calendar, Storefront, WhatsappLogo, Barbell, InstagramLogo } from 'phosphor-react'; 

import styles from './Header.module.css' 
import logoPSF from '../assets/logo-psf.svg'

export function Header({isTransparent}) {
  return (
    <header className={isTransparent ? styles.transparentHeader : styles.header }>
      <img src={logoPSF} className={styles.logo} alt="Logo Pro Skills Futsal" />
      <ul>
        <li>
          <a href="">
            <House size={20} />
            <p>Home</p>
            
          </a>
        </li>
        <li>
          <a href="http://">
            <Barbell size={20} />
            <p>Training Program</p>
          </a>
        </li>
        <li>
          <a href="http://">
            <Users size={20} />
            <p>Coaching Staff</p>
          </a>
        </li>
        <li>
          <a href="http://">
            <Calendar size={20} />
            <p>Events</p>
          </a>
        </li>
        <li>
          <a className={styles.highlight} href="http://">
            <PencilLine size={20} />
            <p>Registration</p>
          </a>
        </li>
        <li>
          <a href="http://">
            <WhatsappLogo size={20} />
            <p>Contact us</p>
          </a>
        </li>
      </ul>
      <aside className={styles.social}>
        <ul>
          <li>
            <a href="http://">
              <Storefront size={24} />
              <p>Store</p>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/proskillsfutsal/">
              <InstagramLogo size={24} />
            </a>
          </li>
        </ul>
      </aside>
    </header>
  )
}

// PRO SKILLS FUTSAL - Website

// Home (About us & Futsal)

// Training Program

// Coaching Staff

// Events

// Online Store

// Registration

// Contact us