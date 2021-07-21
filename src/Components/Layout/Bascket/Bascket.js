import React from 'react'
import BascketResults from './BascketResults'
import ProductItem from '../Products/ProductItem/ProductItem'

const Bascket = props => {
    
let count = []
    // console.log(props);
    {props.state.cart.map(product => {
        return count.push(product.count)
    })}
    let sumOfGoods = count.reduce((a, b) => a + b)
    return (
        <div>
            <p>Products in the basket: {sumOfGoods} </p>
            {props.state.products.map((product, index) => {
                <BascketResults 
                    key={index}
                    product={product}
                    cart={props.state.cart}

                />
            
        
    })}
        </div>
    )
    
    
}

export default Bascket