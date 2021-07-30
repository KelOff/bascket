import React from 'react'
import BasketGoods from './BasketGoods'

const Bascket = props => {
    
    let result = 0
    for (let i = 0; i < props.state.cart.length; i++) {
        if (props.state.cart[i].productId === props.state.products[props.state.cart[i].productId - 1].id) {
            if (props.state.cart[i].count >= 0) {
            result = result +  props.state.products[props.state.cart[i].productId - 1].price * props.state.cart[i].count}
        } 
    }

    return (
        <div>
            <p> Products in the basket: &nbsp;
                { props.state.cart.length} 
            </p>
            <BasketGoods 
                state={props.state}
            />
            <p>Cost: {result} </p>

        </div>
    )
    
    
}

export default Bascket