
import { Pencil } from 'phosphor-react'

import styles from './RegistrationSection.module.css' 

export function Registration() {
  return (
    <section className={styles.mainSection} id="registration">
      <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfT2BQ9f1yYIM_ISU_7xioGSdsfacGxcPCF8_BDOEX0uSIjHw/viewform?fbclid=IwAR1Y5-uxfl-C-fHtN0nNdLw4KJNpBN39xr0Gj219VzNutJCeZpUI7WFmGAo">
        <h1>CLICK HERE FOR PROGRAM COST AND TO FILL OUT THE REGISTRATION FORM!</h1>
        <button>
        REGISTRATION 
        <Pencil size={30} weight='bold'/>
      </button>
      </a>
    </section>
  )
}