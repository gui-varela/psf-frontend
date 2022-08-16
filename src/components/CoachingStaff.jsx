import { useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'

import styles from './CoachingStaff.module.css'
import allan from '../assets/allan.jpg'
import coachAvatarImage from '../assets/coach-avatar.jpg'

export function CoachingStaff() {
  const coaches = [
    {
      name: "Quam",
      function: "President",
      photo: allan
    },
    {
      name: "Allan Costa",
      function: "Director",
      photo: allan
    },
    {
      name: "Frank",
      function: "Trainer",
      photo: allan
    },
    {
      name: "Otto",
      function: "Trainer",
      photo: allan
    },
    {
      name: "Oumar",
      function: "Trainer",
      photo: allan
    },
  ]

  const [horizontalPosition, setHorizontalPosition] = useState(0)

  function handleScrollPosition() {
    const position = document.querySelector("#main").getBoundingClientRect().x
    if (position > 0) {
      setHorizontalPosition(document.querySelector("#main").getBoundingClientRect().x)
    }
    else {
      setHorizontalPosition(0)
    }
    console.log(`scroll: ${horizontalPosition}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Coaching Staff</h1>
      </div>
      <section className={styles.coachesSection}>
        
        <div className={styles.arrow}>
          <CaretLeft size={40}/>
        </div>

        <div className={styles.mainContainer}>
          
          <main onScroll={handleScrollPosition} id='main' className={styles.main}>
            {coaches.map(coach => {
              return (
                <div key={coach.name} className={styles.mainCard}>
                  <div className={styles.imgContainer}>
                    <img src={ coach.name == "Allan Costa" ? allan : coachAvatarImage } alt="" />
                  </div>   
                  <div className={styles.profile}>
                    <h3>{coach.name}</h3>
                    <p>{coach.function}</p>
                  </div>
                </div>
              )
            })}
            

          </main>

        </div>

        <div className={styles.arrow}>
          <CaretRight size={40}/>
        </div>

      </section>

      <div className={styles.slider}>
        {coaches.map(coach => {
          return (
            <div key={coach.name} className={styles.notSelected}></div>
          )
        })}
      </div>
    </div>
  )
}