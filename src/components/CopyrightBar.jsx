import { useState, useEffect } from 'react'
import styles from './CopyrightBar.module.css'

export function CopyrightBar() {
  const [currentYear, setCurrentYear] = useState(2023)

  useEffect(() => {
    const today = new Date()
    setCurrentYear(today.getUTCFullYear())
    console.log(today)
  }, [currentYear]);

  return (
    <footer className={styles.mainSection}>
      &copy; Pro Skills Futsal {currentYear} &nbsp;<a href="https://github.com/gui-varela" target='_blank'>by Guilherme Varela</a>
    </footer>
  )
}