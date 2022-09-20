import { EnvelopeSimple, InstagramLogo, FacebookLogo } from 'phosphor-react'
import { useState } from 'react'

import styles from './ContactUs.module.css' 

export function ContactUs() {
  return (
    <section className={styles.mainSection} id="contactUs">
      <h1>Contact Us!</h1>
      <div className={styles.links}>
        <div className={styles.contact}>
          <EnvelopeSimple />
          <p>proskillsfutsal@gmail.com</p>
        </div>
        <div className={styles.contact}>
          <InstagramLogo />
          <a target="blank" href="https://www.instagram.com/proskillsfutsal/"><p>@proskillsfutsal</p></a>
        </div>
        <div className={styles.contact}>
          <FacebookLogo />
          <a target="blank" href="https://www.facebook.com/proskillsfutsal/"><p>Pro Skills Futsal</p></a>
        </div>
      </div> 
    </section>
  )
}