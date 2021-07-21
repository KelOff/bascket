import React from 'react'
import BascketResultsItem from './BascketResultsItem'

const BascketResults = props => (
    
    <div>
    {props.state.products.map((product, index) => {

            console.log(product);
            // console.log(props.state.cart);
        return (    
            
                <BascketResultsItem 
                    key={index}
                    product={product}
                    cart={props.state.cart}

                />
            
        )
    })}
    </div>
)

export default BascketResults