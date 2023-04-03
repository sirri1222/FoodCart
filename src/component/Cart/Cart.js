import React from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'
const Cart = (props) => {
    const cartItems =
        <ul className={classes['cart-items']}></ul>
    {
        [{ id: "", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
            <li>{item.name}</li>
        ))
    }
    return (
        <div>
            <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span> 35.62</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']}>close</button>
                <button className={classes.button}>Order</button>
            </div>
            </Modal>
        </div>
    )
}

// 148 듣기 
export default Cart