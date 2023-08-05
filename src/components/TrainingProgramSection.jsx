import { useState } from 'react'
import { Pencil, ChartLineUp, SoccerBall, Alarm } from 'phosphor-react'

import styles from './TrainingProgramSection.module.css'

export function TrainingProgramSection({ backgroundColor, image, imageSide, hasTitle, subtitleText, subtitleIcon, description }) {
  const renderTitle = () => {
    if (hasTitle) {
      return (<h1>Training Program</h1>)
   }
  }

  const chooseIcon = () => {
    if (subtitleIcon == "ball") {
      return (<SoccerBall />)
    }
    else if (subtitleIcon == "chart") {
      return (<ChartLineUp />)
    }
    return (<Alarm />)
  }

  const imageContainer = (side) => {
    let id = side == "left" ? styles.leftImageContainer : styles.rightImageContainer
    return (
      <div id={id} className={styles.imageContainer}>
        <img src={image} alt="" />
      </div>
    )
    
  }

  const setImageSide = (side) => {
    if (side == imageSide) {
      return imageContainer(side)
    }
  }

  return (
    <section id='trainingProgram' className={ backgroundColor == "dark" ? styles.sectionDarkBackground : styles.sectionLightBackground } >
      { renderTitle() }
      <article className={styles.goalSection}>

        { setImageSide("left") }

        <div className={styles.textContainer}>
          <span>
            { chooseIcon() }
            <h2>{ subtitleText }</h2>
          </span>
          <p>{ description }</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfT2BQ9f1yYIM_ISU_7xioGSdsfacGxcPCF8_BDOEX0uSIjHw/viewform?fbclid=IwAR1Y5-uxfl-C-fHtN0nNdLw4KJNpBN39xr0Gj219VzNutJCeZpUI7WFmGAo" 
            target="blank" 
            rel="noopener noreferrer">
              <button className={styles.button}>Register Now! <Pencil/></button>
          </a>
        </div>

        { setImageSide("right") }

      </article>
      
    </section>
  )
}