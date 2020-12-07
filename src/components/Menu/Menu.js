import React from "react"
import { Link } from "gatsby"
import styles from "./Menu.module.scss"
import MenuItem from "../MenuItem/MenuItem"

export default function Menu(props) {

  const READ_BLOG = 'Read my blog'

  return (
      <div className={ styles.topmenu }>
        { props.headerData.map(el => {
            const props = {
              posts: el.count,
              IconItem: el.icon, 
              name: el.name, 
              key: el.name,
              size: el.size,
              header: el.header
            }

          return (<MenuItem {...props} />)
          }
        )}
        <Link className={ styles.link } to="/blog">
          <span>{ READ_BLOG }</span>
        </Link>
      </div>
  )
}
