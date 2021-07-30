import React from 'react'


const BasketGoodsItem = props => {

    let name
    let count = props.cart.count
    let sum 
    
    {props.product.map(product => {
        if (product.id === props.cart.productId) {
            sum = product.price
            name = product.name
        }
    })}
    const cost = sum * count
        
    return (
        <li>
            In the basket   <b>{ count }</b>   products   <b>{name }</b>   summary cost:   <b>{ cost }</b>
        </li>
    )
}

export default BasketGoodsItem