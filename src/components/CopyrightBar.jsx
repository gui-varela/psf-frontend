import styles from './CopyrightBar.module.css'

export function CopyrightBar() {
  return (
    <footer className={styles.mainSection}>
      &copy; Pro Skills Futsal 2022 &nbsp;<a href="http://">by Guilherme Varela</a>
    </footer>
  )
}