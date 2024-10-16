import { useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'

import styles from './CoachingStaff.module.css'
import allan from '../assets/allan-director.jpg'
import quam from '../assets/coach-quam.jpg'
import awal from '../assets/coach-awal.jpg'
import baba from '../assets/coach-baba.jpg'
import oscar from '../assets/coach-oscar.jpg'
import coachAvatarImage from '../assets/coach-avatar.jpg'

export function CoachingStaff() {
const coaches = [
    {
      name: "Quam",
      function: "President",
      photo: quam
    },
    {
      name: "Allan Costa",
      function: "Director/Trainer",
      photo: allan
    },
    {
      name: "Oscar",
      function: "Trainer",
      photo: oscar
    },
  {
      name: "Awal",
      function: "Trainer",
      photo: awal
    },
  {
      name: "Baba",
      function: "Trainer",
      photo: baba
    },
  ]
  
  const [horizontalPosition, setHorizontalPosition] = useState(0)

  function increaseScrollPosition() {
    let slider = document.querySelector("#main")
    slider.scrollLeft = horizontalPosition
    let scrollWidth = slider.scrollWidth
    let totalWidth = slider.getBoundingClientRect().width
    let minSlideDistance = (scrollWidth - totalWidth)/coaches.length
    setHorizontalPosition(slider.scrollLeft += minSlideDistance)
    slider.scrollLeft = horizontalPosition
    console.log(horizontalPosition)
  }

  function decreaseScrollPosition() {
    let slider = document.querySelector("#main")
    slider.scrollLeft = horizontalPosition
    let scrollWidth = slider.scrollWidth
    let totalWidth = slider.getBoundingClientRect().width
    let minSlideDistance = (scrollWidth - totalWidth)/coaches.length
    setHorizontalPosition(slider.scrollLeft -= minSlideDistance)
    slider.scrollLeft = horizontalPosition
    console.log(horizontalPosition)
  }

  function smoothScroll(distance) {
    while (delta < distance) {
      delta++
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }

  return (
    <section className={styles.container} >
      <div className={styles.title}>
        <h1>Coaching Staff</h1>
      </div>
      <section className={styles.coachesSection}>
        
        <div onClick={decreaseScrollPosition} className={styles.arrow}>
          <CaretLeft size={40}/>
        </div>

        <div className={styles.mainContainer}>
          
          <main onScroll={console.log(horizontalPosition)} id='main' className={styles.main}>
            {coaches.map(coach => {
              return (
                <div key={coach.name} className={styles.mainCard}>
                  <div className={styles.imgContainer}>
                    <img src={ coach.photo ? coach.photo : coachAvatarImage } alt="" />
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

        <div onClick={increaseScrollPosition} className={styles.arrow}>
          <CaretRight size={40}/>
        </div>

      </section>
    </section>
  )
}
