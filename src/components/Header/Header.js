import React from "react"
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <div className={ styles.header } style={{ width: '100%', height: '400px'}} >
      <h1 style={{ textAlign: 'center' }}>Driving around<br></br>Andalucia</h1>
    </div>
  )
}
