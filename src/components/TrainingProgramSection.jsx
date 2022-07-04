import { useState } from 'react'
import { Airplane, SoccerBall, Alarm } from 'phosphor-react'

import styles from './TrainingProgramSection.module.css'

export function TrainingProgramSection({ canAnimate }) {
  const [number, setNumber] = useState(0);

  function handleNumber() {
    setTimeout(() => {
        setNumber(number+1)
        console.log(number)    
    }, (Math.pow((number-10)*(-1), 4)+10000)/400000);
  }

  if (canAnimate && number < 100)
    handleNumber()

  return (
    <section className={styles.section}>
        <h1>Our Tranining Program</h1>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.iconTitle}>
              <Airplane />
              <h2>{Math.round(number*1.5)}</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className={styles.item}>
            <div className={styles.iconTitle}>
              <SoccerBall />
              <h2>{number}</h2>
            </div>
            <p>Lorem ipsum dolor sit amer, consectetur adipisicing elit.</p>
          </div>
          <div className={styles.item}>
            <div className={styles.iconTitle}>
              <Alarm />
              <h2>78</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <button className={styles.button}>Register Now!</button>
    </section>
  )
}