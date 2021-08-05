import React from 'react'
import classes from './Button.css'

const Button = props => {


    return (
        <div className={classes.Button}>
            <button
                onClick={() => props.changeCountHandler(-1, props.productId)}
            >-</button> &nbsp;
            <span  style={{display: 'inline-block'}}
            >
                {props.children}
            </span> &nbsp;
            <button
                onClick={() => props.changeCountHandler(+1, props.productId)}
            >+</button>
        </div>

    )

}

export default Button