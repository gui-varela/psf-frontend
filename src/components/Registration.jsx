
import { Pencil } from 'phosphor-react'

import styles from './RegistrationSection.module.css' 

export function Registration() {
  return (
    <section className={styles.mainSection} id="registration">
      <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfrpb-gaaQjIlfsgZZF0vk0U2oLJEb2oXms2FERn8hvr5t5oQ/viewform">
        <h1>CLICK HERE FOR PROGRAM COST AND TO FILL OUT THE REGISTRATION FORM!</h1>
        <button>
        REGISTRATION 
        <Pencil size={30} weight='bold'/>
      </button>
      </a>
    </section>
  )
}
