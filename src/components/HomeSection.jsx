import { ArrowRight } from 'phosphor-react'

import bannerImage from '../assets/pro-skill-futsal-kids-hugging.png'
import styles from './HomeSection.module.css'

export function HomeSection() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>A futsal Community.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem suscipit perferendis cupiditate, qui libero tempore molestias quibusdam possimus, ullam id necessitatibus ipsam! Delectus debitis ut, ducimus quae sequi aut sapiente.</p>
        <a href='#'>
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