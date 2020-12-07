import React from "react"
import { myContext } from '../../helpers/provider'
import styles from './MenuItem.module.scss'

export default function MenuItem(props) {

    const style = { width: '24px', right: '-24px' }
    const DEFAULT_HEADER = ( <p style={{color: 'white', fontSize: '24px'}}>{ props.header }</p> )

    return (
        <myContext.Consumer>
            {context => (
                <div 
                    onClick={event => {
                        context.handleHeaderText(DEFAULT_HEADER);
                        const setStyle = (el, color, textDecoration) => {
                            el.style.color = color
                            el.style.textDecoration = textDecoration
                        }
                        const currentEl = event.target;
                        const parentChildren = currentEl.parentNode.parentNode.children;
                        const parentChildrenArr = [ ...parentChildren ];
                        parentChildrenArr.forEach((item, i) => {
                            if (i < 3) {
                                const { firstChild } = item;
                                setStyle(firstChild, 'grey', 'none') 
                            }
                        });
                        context.toggle ? setStyle(currentEl, 'grey', 'none') : setStyle(currentEl, 'black', 'underline') 
                    }}

                    className={ styles.topmenuitem }
                >
                <p className={ styles.topmenutext }>
                    { props.name }
                </p>
                <div 
                    style={ props.size ? style : null } 
                    className={ styles.statswrapper }>
                    <span className={ styles.statstext } >
                        { props.posts }
                    </span>
                </div>
                </div>
            )}
        </myContext.Consumer>
    )}