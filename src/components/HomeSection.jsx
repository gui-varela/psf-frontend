import { ArrowRight, CaretLeft, CaretRight } from 'phosphor-react'

import bannerImage1 from '../assets/futsal-kids.jpg'
import bannerImage2 from '../assets/pro-skill-futsal-all-kids.jpg'
import bannerImage3 from '../assets/futsal-girls-team.jpg'
import bannerImage4 from '../assets/boys-winning-medal.jpg'
import styles from './HomeSection.module.css'
import { useState } from 'react'

export function HomeSection() {
  const bannerImages = [
    {
      image: bannerImage1,
      description: ""
    },
    {
      image: bannerImage2,
      description: ""
    },
    {
      image: bannerImage3,
      description: ""
    },
    {
      image: bannerImage4,
      description: ""
    },
  ]

  const [counter, setCounter] = useState(0);
  const [className, setClassName] = useState(styles.bannerImage);

  function handleNextBannerImage() {
    setClassName(styles.changingBannerImage)
    setTimeout(function(){ 
      setCounter(counter+1)
      if (counter == bannerImages.length - 1)
        setCounter(0)
      console.log(counter)
      setClassName(styles.bannerImage)
    }, 1000);
  }

  function handlePreviousBannerImage() {
    setClassName(styles.changingBannerImage)
    setTimeout(function(){ 
      setCounter(counter-1)
    if (counter == 0)
      setCounter(bannerImages.length - 1)
    console.log(counter)
    setClassName(styles.bannerImage)
    }, 1000);
  }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>About Us</h1>
        <p>
          Pro Skills Futsal is a club-neutral supplemental futsal club located in Southern part of New Jersey. As great skill developers, our training methodology will help players improve their technical skills, speed of play and quick decision-making skill.
        </p>
        <p>  
          Futsal has helped shape our players’ technical proficiency, become more creative, confident on the ball in a small sided fast-paced environment.
        </p>
        <a target="blank" href='https://docs.google.com/forms/d/e/1FAIpQLSeS91fa-D4-1A3TWzHUY_-GrpKylc6eudjWKlsuXneouiwq1Q/viewform'>
          <ArrowRight />
          <span>Register Now!</span>
        </a>
      </section> 
            
      <aside className={styles.aside}>
        <div className={styles.slider}>
          <CaretLeft onClick={handlePreviousBannerImage} size={40}/>
          <div className={styles.imageContainer}>
            <img 
              className={className} 
              src={bannerImages[counter].image}
              alt={bannerImages[counter].description}
            />
          </div>
          <CaretRight onClick={handleNextBannerImage} size={40}/>
        </div>
        <div className={styles.sliderPosition}>
          {
            bannerImages.map((image) => {
              if (bannerImages.indexOf(image) == counter)
                return <div key={bannerImages.indexOf(image)} className={styles.selectedBall}></div>
              return <div key={bannerImages.indexOf(image)} className={styles.ball}></div>
            })
          }
        </div>
      </aside>
    </main>
  )
}
