import React from 'react'
import classes from './Button.css'

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ]

    return (
        <div>
            <button
                onClick={() => props.changeCountHandler(-1, props.productId)}
            >-</button>
            <button 
                className={cls.join(' ')}
                disabled={props.disabled}
            >
                {props.children}
            </button>
            <button
                onClick={() => props.changeCountHandler(+1, props.productId)}
            >+</button>
        </div>

    )

}

export default Button