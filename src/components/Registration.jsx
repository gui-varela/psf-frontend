
import { Pencil } from 'phosphor-react'

import styles from './RegistrationSection.module.css' 

export function Registration() {
  return (
    <section className={styles.mainSection} id="registration">
      <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSffiR1q6IQmGVUosmgr9eck4dEh5GfF7dc_OQS0SOJFlc3Nhw/viewform">
        <h1>CLICK HERE FOR PROGRAM COST AND TO FILL OUT THE REGISTRATION FORM!</h1>
        <button>
        REGISTRATION 
        <Pencil size={30} weight='bold'/>
      </button>
      </a>
    </section>
  )
}
