import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Header } from './components/Header'

import styles from './global.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header className={styles.header}/>
    <App onScroll={() => {console.log("oi")}}/>
  </React.StrictMode>
)
