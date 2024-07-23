import { MapPin, EnvelopeSimple, InstagramLogo, FacebookLogo } from 'phosphor-react'

import styles from './Footer.module.css' 
import logo from '../assets/logo-psf.svg'

export function Footer() {
  return (
    <footer className={styles.mainSection}>
      <div className={styles.companyInfo}>
        <div className={styles.companyLogo}>
          <img src={logo} alt="Pro Skills Futsal Logo"/>
        </div>
        <div className={styles.links}>
          <p className={styles.companyName}>Pro Skills Futsal &#174;</p>         
          <div className={styles.contact}>
            <EnvelopeSimple/><p>proskillsfutsal@gmail.com</p>
          </div>
          <div className={styles.contact}>
            <InstagramLogo/><a target="blank" href="https://www.instagram.com/proskillsfutsal/"><p>@proskillsfutsal</p></a>
          </div>
          <div className={styles.contact}>
            <FacebookLogo/><a target="blank" href="https://www.facebook.com/proskillsfutsal/"><p>Pro Skills Futsal</p></a>
          </div>
        </div>
      </div>
    </footer>
  )
}