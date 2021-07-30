import React from 'react'
import BasketGoodsItem from './BasketGoodsItem'

const BasketGoods = props => (
    
    <ul>
    {props.state.cart.map((product, index) => {


        return (    
                
                <BasketGoodsItem 
                    key={index}
                    product={props.state.products}
                    cart={product}

                />
            
        )
    })}
    </ul>
)

export default BasketGoods