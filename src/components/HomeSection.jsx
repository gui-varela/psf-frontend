import { ArrowRight } from 'phosphor-react'

import bannerImage from '../assets/pro-skill-futsal-kids-hugging.jpg'
import styles from './HomeSection.module.css'

export function HomeSection() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>About Us</h1>
        <p>Pro Skill Futsal is a club-neutral supplemental Futsal training program located in Southern part of New Jersey. Pro Skill Futsal has achieved tremendous individual and competitive success in the Youth Futsal Arena at the State, Regional and National levels. </p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfHNgHgoFXzi7mWOwsLmWC7mpbYZXkOUbK-8gbSSAMSh7GDpA/viewform'>
          <ArrowRight />
          <span>Register Now!</span>
        </a>
      </section> 
            
      <aside className={styles.aside}>
        <div className={styles.imageContainer}>
          <img 
            className={styles.bannerImage} 
            src={bannerImage} 
            alt="kids hugging in front of the goalpost"
          />
        </div>
      </aside>
    </main>
  )
}