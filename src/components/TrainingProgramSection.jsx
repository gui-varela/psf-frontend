import { useState } from 'react'
import { Pencil, ChartLineUp, SoccerBall, Alarm, CaretDown, CaretUp } from 'phosphor-react'
import { Link, animateScroll as scroll } from 'react-scroll'
import styles from './TrainingProgramSection.module.css'

export function TrainingProgramSection({ hasLink = false, backgroundColor, handleReadMore, sectionId="home", subsection=false, image, position="mid", imageSide, title, subtitleText, subtitleIcon, description }) {
  const renderTitle = () => {
    if (title) {
      return (<h1>{title}</h1>)
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

  return (
    <section 
      id='trainingProgram' 
      className={ `${backgroundColor == "dark" ? styles.sectionDarkBackground : styles.sectionLightBackground} ${subsection && styles.subsection}` } 
    >
      { renderTitle() }
      <article imageSide={imageSide} className={imageSide === "left" ? styles.goalSectionLeft : styles.goalSectionRight}>
        <div className={styles.textContainer}>
          { subtitleText &&
            <span>
              { chooseIcon() }
              <h2>{ subtitleText }</h2>
            </span>
          }
          <p>{ Array.isArray(description) ? description.map(text => <p>{text}</p>) : description }</p>
          { position === 'first' &&
            <button onClick={handleReadMore} className={styles.button}>Read more!<CaretDown weight='bold'/></button>
          }
        </div>

        <div className={styles.imageContainer}>
          <img src={image} alt="" />
        </div>
      </article>
      {
        position === "last" &&
          <Link onClick={handleReadMore} className={styles.button} to={sectionId} spy={true} smooth={true} offset={-200} duration={500}>
            Read less<CaretUp weight='bold'/>
          </Link>
      }
      { hasLink &&
        <div className={styles.buttonArea}>
          <a 
            href='https://docs.google.com/forms/d/e/1FAIpQLSffiR1q6IQmGVUosmgr9eck4dEh5GfF7dc_OQS0SOJFlc3Nhw/viewform' 
            target="blank" className={styles.formLink}
          >
            <Pencil size={30}/>Click here to register
          </a>
        </div>
      }
    </section>
  )
}
