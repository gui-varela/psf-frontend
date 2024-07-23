import { Link, animateScroll as scroll,  } from "react-scroll";
import { useState, useEffect } from 'react'

import { Header } from './components/Header'
import { HomeSection } from './components/HomeSection'
import { TrainingProgramSection } from './components/TrainingProgramSection'
import { Form } from './components/Form'
import { CoachingStaff } from './components/CoachingStaff'
import { ContactUs } from './components/ContactUs'
import { Footer } from './components/Footer'
import { CopyrightBar } from './components/CopyrightBar'
import { CaretDown } from 'phosphor-react'

import './global.css' 

import streetImage from './assets/street-futsal.jpg'
import selfDevelopmentImage from './assets/boys-training-soccer.jpg'
import trainingProgram2 from './assets/training-program2.jpg'
import trainingProgram3 from './assets/training-program3.jpg'
import futsalAcademy1 from './assets/futsal-academy1.jpg'
import futsalAcademy2 from './assets/futsal-academy2.jpg'
import futsalAcademy3 from './assets/futsal-academy3.jpg'
import semiPro1 from './assets/semi-pro1.jpg'
import semiPro2 from './assets/semi-pro2.jpg'
import semiPro3 from './assets/semi-pro3.jpg'
import semiPro4 from './assets/semi-pro4.jpg'
import semiPro5 from './assets/semi-pro5.jpg'
import semiPro6 from './assets/semi-pro6.jpg'
import { Registration } from "./components/Registration";

export function App() { 
  const [readMoreTraining, setReadMoreTraining] = useState(false)
  const [readMoreAcademy, setReadMoreAcademy] = useState(false)
  const [readMoreSemipro, setReadMoreSemipro] = useState(false)

  const handleReadMore = (obj, func) => {
    func(!obj)
  }

  return (
    <div id="pageFeed" className="App">
      <div id="home">
        <HomeSection />
      </div>
      <div>
        <div id="trainingProgram">
          <TrainingProgramSection 
            title="Our Programs"
            handleReadMore={() => handleReadMore(readMoreTraining, setReadMoreTraining)}
            position={readMoreTraining ? "mid" : "first"}
            backgroundColor="dark"
            image={trainingProgram3}
            imageSide="left"
            subtitleIcon="ball"
            subtitleText="Futsal Training Program"
            description="Our futsal training program consist of all year-round futsal training, where the players will learn the tactical concepts of futsal and all key aspects of futsal such as rotations, transition plays, defending/attacking shape, quick passing combinantios and technical skills."
          />
          {
            readMoreTraining &&
            <TrainingProgramSection 
              sectionId="trainingProgram"
              backgroundColor="dark"
              subsection={true}
              image={trainingProgram2}
              position={readMoreTraining ? "last" : "mid"}
              handleReadMore={() => handleReadMore(readMoreTraining, setReadMoreTraining)}
              imageSide="right"
              subtitleIcon="ball"
              description="Our goal is to develop players through the aspects of the futsal game that can be translates to improved perfomance on the soccer field. Players participating in our training program also have the opportunity to be trained and evaluated weekly by our experienced futsal coaching staff, some with prior experience as professional players, and have the chance of being invited to be part of our academy team. The training program does not include futsal competition or official games. There is no guarantee that a player registered for the training program will be selected for the academy team."
            />
          }
        </div>
        <div id="academyProgram">
          <TrainingProgramSection
            backgroundColor="light"
            handleReadMore={() => handleReadMore(readMoreAcademy, setReadMoreAcademy)}
            position={readMoreAcademy ? "mid" : "first"}
            image={futsalAcademy1}
            imageSide="right"
            subtitleIcon="chart"
            subtitleText="Futsal Academy Program"
            description="Pro Skills Futsal Academy program is a highly competitive club-neutral program that has achieved temendous individual and competitive success in the Youth Futsal Arena at State, Refional and National levels. "
          /> 
          {
            readMoreAcademy &&
            <>
              <TrainingProgramSection 
                backgroundColor="light"
                subsection={true}
                image={futsalAcademy2}
                imageSide="left"
                subtitleIcon="ball"
                description="Our futsal academy program consists of selected players that will form teams and represent Pro Skills Futsal Academy is the highest level of futsal competitions around the United States and internationally. The selection process will be made through invitations by our experienced coaching staff."
              />
              <TrainingProgramSection 
                sectionId="academyProgram"
                backgroundColor="light"
                subsection={true}
                image={futsalAcademy3}
                position={readMoreAcademy ? "last" : "mid"}
                handleReadMore={() => handleReadMore(readMoreAcademy, setReadMoreAcademy)}
                imageSide="right"
                subtitleIcon="ball"
                description={[
                  "Selection/Invitation will be based on players’ interest, and level of play which will determine which  competition will be suitable for each individual player to play in. ",
                  "Note: Preferences will be given to players that are registered in our training program. "
                ]}
              />
            </>
          }
        </div> 
        <div id="streetProgram">
          <TrainingProgramSection 
            sectionId="streetProgram"
            backgroundColor="dark"
            image={streetImage}
            imageSide="left"
            subtitleIcon="ball"
            subtitleText="Street Futsal Summer Program"
            description="Pro Skills Street Futsal is a summer futsal program commited to providing a fun and inclusive environment where the players are encouraged to have freedom to express themselves, be creative and try new skills. The program consist of scrimmages replicating a street futsal experience, very popular in Brazil and other South American countries."
          />
        </div>
        <div id="semiproProgram">
          <TrainingProgramSection
            backgroundColor="light"
            handleReadMore={() => handleReadMore(readMoreSemipro, setReadMoreSemipro)}
            position={readMoreSemipro ? "mid" : "first"}
            image={semiPro5}
            imageSide="right"
            subtitleIcon="chart"
            subtitleText="Pro Skills Futsal Semi-Pro"
            description="At Pro Skills, we are not just about developing young talents but also fostering a culture of excellence and success. As part of our commitment to providing the best environment for our players to grow and learn, we are excited to introduce you to our semi-professional adult team."
          /> 
          {
            readMoreSemipro &&
            <>
              <TrainingProgramSection 
                backgroundColor="light"
                subsection={true}
                image={semiPro2}
                imageSide="left"
                subtitleIcon="ball"
                description="Our semi-pro adult team serves as a shining example of what hard work, dedication, and passion for the game can achieve. Comprised of skilled and experienced players, our team competes at a high level in various leagues and tournaments, showcasing the very best of Futsal."
              />
              <TrainingProgramSection 
                backgroundColor="light"
                subsection={true}
                image={semiPro1}
                imageSide="right"
                subtitleIcon="ball"
                description="Our adult team members exemplify the highest standards of professionalism both on and off the court. By observing and interacting with them, our young players can learn valuable lessons about discipline, commitment, and sportsmanship."
              />
              <TrainingProgramSection 
                backgroundColor="light"
                subsection={true}
                image={semiPro3}
                imageSide="left"
                subtitleIcon="ball"
                description="Watching our adult team play will expose our young players to advanced techniques, strategies, and tactics used by seasoned professionals. This exposure can inspire them to hone their skills and strive for excellence in their own game."
              />
              <TrainingProgramSection 
                backgroundColor="light"
                subsection={true}
                image={semiPro4}
                imageSide="right"
                subtitleIcon="ball"
                description="Our adult team members serve as mentors and role models for our youth players. They are always willing to share their knowledge, provide guidance, and inspire the next generation of Futsal stars."
              />
              <TrainingProgramSection 
                sectionId="semiproProgram"
                backgroundColor="light"
                subsection={true}
                image={semiPro6}
                position={readMoreSemipro ? "last" : "mid"}
                handleReadMore={() => handleReadMore(readMoreSemipro, setReadMoreSemipro)}
                imageSide="left"
                subtitleIcon="ball"
                description={"Our semi-professional adult team is an integral part of our Futsal Youth Training Program and coaching staff providing a pathway for our players to aspire to greater heights in their Futsal journey."}
              />
            </>
          }
        </div>
      </div>
      
      <div id="coachingStaff">
        <CoachingStaff />
      </div>
      
      <Registration/>
      <div id="registration">
        <ContactUs/>
      </div>
      <Footer />
      <CopyrightBar />
    </div>
  )
}
