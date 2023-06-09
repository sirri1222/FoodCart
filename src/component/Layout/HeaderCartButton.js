import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    return (
        <div><button onClick={props.onClick}  className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>your cart</span>
            <span className={classes.badge}>3</span>

        </button></div>
    )
}

export default HeaderCartButton