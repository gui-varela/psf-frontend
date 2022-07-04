import { Link, animateScroll as scroll,  } from "react-scroll";
import { useState } from 'react'

import { Header } from './components/Header'
import { HomeSection } from './components/HomeSection'
import { TrainingProgramSection } from './components/TrainingProgramSection'

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
        <TrainingProgramSection canAnimate={canAnimate} />
        <HomeSection />
        <TrainingProgramSection />
        <HomeSection />
      </div>
    </div>
  )
}
