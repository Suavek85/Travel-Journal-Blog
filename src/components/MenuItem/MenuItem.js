import React from "react"
import styles from './MenuItem.module.scss'

export default function MenuItem(props) {
    return (
        <div className={ styles.topmenuitem }>
          <p className={ styles.topmenutext }>{ props.name }</p>
          <div className={ styles.statswrapper }>
              <span className={ styles.statstext } >{ props.posts }</span>
            </div>
        </div>
    )}