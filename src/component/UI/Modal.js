import React from 'react'
import classes from "./Modal.module.css"
import  ReactDOM  from 'react-dom'
const Backdrop = props => {
    return <div></div>
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>   
            <div className={classes.content}>{props.children}</div>
          </div>  )
     
}

const potalElement = document.getElementById('overlays');
const Modal = (props) => {
    return (
        <div>
           {ReactDOM.createPortal(<Backdrop/> ,potalElement) }
            <ModalOverlay>{props.children}</ModalOverlay>
        </div>
    )
}

export default Modal