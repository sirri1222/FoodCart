import React from 'react'
import mealsImg from '../../assets/meals.jpg'
import classes from  './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = ({showCartHandler, hideCartHandler}) => {
    return (
        <React.Fragment>

            <header className={classes.header}>
                <h1>delivery Yo!</h1>
              <HeaderCartButton onClick={showCartHandler}/>
            </header>
            <div className={classes['main-image']}>


                <img src={mealsImg} alt='visual'></img>
            </div>
        </React.Fragment>
    )
}

export default Header;