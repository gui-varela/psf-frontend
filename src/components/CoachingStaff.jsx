import { ArrowLeft, ArrowRight } from 'phosphor-react'

import styles from './CoachingStaff.module.css'
import allan from '../assets/allan.jpg'

export function CoachingStaff() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Coaching Staff</h1>
      </div>
      <section className={styles.coachesSection}>
        <div className={styles.arrow}>
          <ArrowLeft size={40}/>
        </div>
        <div className={styles.mainContainer}>
          <main className={styles.main}>
            <div className={styles.smallCard}>
              <div className={styles.imgContainer}>
                <img src={allan} alt="" />
              </div>   
              <div className={styles.profile}>
                <h3>Allan Costa</h3>
                <p>Director</p>
              </div>
            </div>
            
            <div className={styles.mainCard}>
              <div className={styles.imgContainer}>
                <img src={allan} alt="" />
              </div>   
              <div className={styles.profile}>
                <h3>Allan Costa</h3>
                <p>Director</p>
              </div>
            </div>

            <div className={styles.smallCard}>
            <div className={styles.imgContainer}>
                <img src={allan} alt="" />
              </div>   
              <div className={styles.profile}>
                <h3>Allan Costa</h3>
                <p>Director</p>
              </div>
            </div>
          </main>
        </div>
        <div className={styles.arrow}>
          <ArrowRight size={40}/>
        </div>
      </section>
      <div className={styles.slider}>
        <div className={styles.notSelected}></div>
        <div className={styles.notSelected}></div>
        <div className={styles.selected}></div>
        <div className={styles.notSelected}></div>
        <div className={styles.notSelected}></div>
      </div>
    </div>
  )
}