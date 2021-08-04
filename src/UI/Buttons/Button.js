import React from 'react'
import classes from './Button.css'

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ]

    return (
        <div className={classes.Button}>
            <button
                onClick={() => props.changeCountHandler(-1, props.productId)}
            >-</button> &nbsp;
            <span  style={{display: 'inline-block'}}
                className={cls.join(' ')}
                disabled={props.disabled}
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