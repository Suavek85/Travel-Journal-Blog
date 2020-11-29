import React from "react"
import { Link } from "gatsby"
import styles from "./Menu.module.scss"
import MenuItem from "../MenuItem/MenuItem"

export default function Menu(props) {

  return (
      <div className={ styles.topmenu }>
        { props.headerData.map(el => <MenuItem posts={ el.count} IconItem={ el.icon } name={ el.name } />) }
        <Link className={ styles.link } to="/blog">
          <span>Read my blog</span>
        </Link>
      </div>
  )
}
