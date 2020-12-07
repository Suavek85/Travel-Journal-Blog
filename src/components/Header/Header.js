import React from "react"
import { myContext } from '../../helpers/provider'
import styles from "./Header.module.scss"

export default function Header() {
  const HEADER = ( <h1>Driving around<br></br>Andalucia</h1> )

  return (
    <myContext.Consumer>
      {context => (
        <div className={ styles.header } >
          <div className={ styles.textwrapper }>
          { context.toggle? context.headertext : HEADER }
          </div>
        </div>
      )}
    </myContext.Consumer>
  )
}
