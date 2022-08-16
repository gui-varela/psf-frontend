
import { Pencil } from 'phosphor-react'

import styles from './RegistrationSection.module.css' 

export function Registration() {
  return (
    <section className={styles.mainSection}>
      <a href=""><h1>CLICK HERE FOR PROGRAM COST AND TO FILL OUT THE REGISTRATION FORM!</h1></a>
      <button>
        REGISTRATION 
        <Pencil size={30} weight='bold'/>
      </button>
    </section>
  )
}