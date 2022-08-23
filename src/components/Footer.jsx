import { MapPin, EnvelopeSimple, InstagramLogo, FacebookLogo } from 'phosphor-react'

import styles from './Footer.module.css' 
import logo from '../assets/logo-psf-white.svg'

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
            <MapPin/>
            <a href="https://www.google.com/search?q=League+Bound+-+14+Federal+St.+Mount+Laurel%2C+NJ%2C+08054&sxsrf=ALiCzsbBaJ7_rRrXbQvHv_2OQnk_kLo62w%3A1660624158625&ei=Hh37YsfnJaba1sQPpOWe2Ac&ved=0ahUKEwjH7tGIw8r5AhUmrZUCHaSyB3sQ4dUDCA8&uact=5&oq=League+Bound+-+14+Federal+St.+Mount+Laurel%2C+NJ%2C+08054&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGABKBAhGGABQAFgAYMQEaABwAXgAgAGTAYgBkwGSAQMwLjGYAQCgAQKgAQHAAQE&sclient=gws-wiz">
              <p>League Bound - 14 Federal St. Mount Laurel, NJ, 08054</p>
            </a>
          </div>
          <div className={styles.contact}>
            <EnvelopeSimple/><p>proskillsfutsal@gmail.com</p>
          </div>
          <div className={styles.contact}>
            <InstagramLogo/><a href="https://www.instagram.com/proskillsfutsal/"><p>@proskillsfutsal</p></a>
          </div>
          <div className={styles.contact}>
            <FacebookLogo/><a href="https://www.facebook.com/proskillsfutsal/"><p>Pro Skills Futsal</p></a>
          </div>
        </div>
      </div>
      
    </footer>
  )
}