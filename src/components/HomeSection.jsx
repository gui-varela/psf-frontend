import { ArrowRight, CaretLeft, CaretRight } from 'phosphor-react'

import bannerImage1 from '../assets/pro-skill-futsal-kids-hugging.jpg'
import bannerImage2 from '../assets/pro-skill-futsal-all-kids.jpg'
import bannerImage3 from '../assets/boys-training-soccer.jpg'
import bannerImage4 from '../assets/boys-listening-coach-instructions.jpg'
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
        <p>Pro Skills Futsal is a club-neutral supplemental Futsal training program located in Southern part of New Jersey. Our program has achieved tremendous individual and competitive success in the Youth Futsal Arena at the State, Regional and National levels. </p>
        <a target="blank" href='https://docs.google.com/forms/d/e/1FAIpQLSffiR1q6IQmGVUosmgr9eck4dEh5GfF7dc_OQS0SOJFlc3Nhw/viewform '>
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
