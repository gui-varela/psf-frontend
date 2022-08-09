import { Link, animateScroll as scroll,  } from "react-scroll";
import { useState } from 'react'

import { Header } from './components/Header'
import { HomeSection } from './components/HomeSection'
import { TrainingProgramSection } from './components/TrainingProgramSection'
import { Form } from './components/Form'
import { CoachingStaff } from './components/CoachingStaff'

import './global.css' 

export function App() {
  const [isTransparent, setIsTransparent] = useState(true)
  const [canAnimate, setCanAnimate] = useState(false)

  function handleScrollPosition() {
    const pageHeight = document.querySelector("#pageFeed").getBoundingClientRect().y
    if (pageHeight > 50) {
      setIsTransparent(true)
    }
    else {
      setIsTransparent(false)
      if ((pageHeight < -80)) {
        setCanAnimate(true)
      }
    }
    
    console.log(`isTransparent: ${isTransparent}`)
    console.log(`canAnimate: ${canAnimate} / scroll: ${pageHeight}`)
  }
  
  return (
    <div onScroll={handleScrollPosition} className="App">
      <Header isTransparent={isTransparent}></Header>
      <div id="pageFeed">
        <HomeSection/>
        <TrainingProgramSection 
          hasTitle={true}
          backgroundColor="dark"
          imageSide="left"
          subtitleIcon="ball"
          subtitleText="Our Goal"
          description="Provide an all year around Futsal training program for players/kids that are interested in becoming a more technical and skilled player regardless of their prospective clubs."
        />
        <TrainingProgramSection 
          backgroundColor="light"
          imageSide="right"
          subtitleIcon="chart"
          subtitleText="Self Development"
          description="We are a great skill developer as Futsal demands quick reflexes, fast-thinking, and pinpoint passing. Our training methodology makes players become more creative, acute, effective with ball-striking and ball-handling techniques."
        />
        <TrainingProgramSection 
          backgroundColor="dark"
          imageSide="left"
          subtitleText="Improving Skills"
          description="Futsal has helped shape our players' technical proficiency, decision-making in a fast-paced environment, tactical understanding in small Futsal groups and outdoor field settings, improvisation and ability to make quick key adjustments throughout the course of a game."
        />
        <CoachingStaff />
      </div>
    </div>
  )
}
