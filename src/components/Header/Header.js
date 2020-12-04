import React from "react"
import { myContext } from '../../helpers/provider'
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <myContext.Consumer>
      {context => (
        <div className={ styles.header } style={{ width: '100%', height: '400px'}} >
          { context.toggle? context.expanded : <h1 style={{ textAlign: 'center' }}>Driving around<br></br>Andalucia</h1> }
        </div>
      )}
    </myContext.Consumer>
  )
}
