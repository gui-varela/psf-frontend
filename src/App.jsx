import { Link, animateScroll as scroll,  } from "react-scroll";
import { useState } from 'react'

import { Header } from './components/Header'
import { HomeSection } from './components/HomeSection'
import { TrainingProgramSection } from './components/TrainingProgramSection'
import { Form } from './components/Form'
import { CoachingStaff } from './components/CoachingStaff'
import { ContactUs } from './components/ContactUs'
import { Footer } from './components/Footer'

import './global.css' 

import ourGoalImage from './assets/coach-coaching-boys.jpg'
import selfDevelopmentImage from './assets/boys-training-soccer.png'
import improvingSkillsImage from './assets/boy-dribbling.jpg'
import { Registration } from "./components/Registration";

export function App() {
  const [isTransparent, setIsTransparent] = useState(true)
  const [canAnimate, setCanAnimate] = useState(false)

  function handleScrollPosition() {
    const pageHeight = document.querySelector("#pageFeed").getBoundingClientRect().y
    if (pageHeight > 50) {
      setIsTransparent(true)
      console.log(isTransparent)
    }
    else {
      setIsTransparent(false)
      if ((pageHeight < -80)) {
        setCanAnimate(true)
      }
    }
  }
  
  return (
    <div onScroll={handleScrollPosition} className="App">
      <Header isTransparent={isTransparent}></Header>
      <div id="pageFeed">
        <HomeSection/>
        <TrainingProgramSection 
          hasTitle={true}
          backgroundColor="dark"
          image={ourGoalImage}
          imageSide="left"
          subtitleIcon="ball"
          subtitleText="Our Goal"
          description="Provide an all year around Futsal training program for players/kids that are interested in becoming a more technical and skilled player regardless of their prospective clubs."
        />
        <TrainingProgramSection 
          backgroundColor="light"
          image={selfDevelopmentImage}
          imageSide="right"
          subtitleIcon="chart"
          subtitleText="Self Development"
          description="We are a great skill developer as Futsal demands quick reflexes, fast-thinking, and pinpoint passing. Our training methodology makes players become more creative, acute, effective with ball-striking and ball-handling techniques."
        />
        <TrainingProgramSection 
          backgroundColor="dark"
          image={improvingSkillsImage}
          imageSide="left"
          subtitleText="Improving Skills"
          description="Futsal has helped shape our players' technical proficiency, decision-making in a fast-paced environment, tactical understanding in small Futsal groups and outdoor field settings, improvisation and ability to make quick key adjustments throughout the course of a game."
        />
        <CoachingStaff />
        <Registration />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}
