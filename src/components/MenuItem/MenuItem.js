import React from "react"
import { myContext } from '../../helpers/provider'
import styles from './MenuItem.module.scss'

export default function MenuItem(props) {

    const style = { width: '24px', right: '-24px' }
    const HELLO = ( <p style={{color: 'white', fontSize: '24px'}}>{ props.header }</p> )

    return (
        <myContext.Consumer>
            {context => (
                <div 
                    onClick={() => context.changeExpanded(HELLO)}
                    className={ styles.topmenuitem }
                >
                <p className={ styles.topmenutext }>
                    { props.name }
                </p>
                <div 
                    style={ props.size ? style : null } 
                    className={ styles.statswrapper }>
                    <span className={ styles.statstext } >{ props.posts }</span>
                </div>
                </div>
            )}
        </myContext.Consumer>
    )}