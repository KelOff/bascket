import React from 'react'
import ProductItem from './ProductItem/ProductItem'

const Products = props => (
    
    <div>
    {props.state.products.map((product, index) => {

            console.log(product);
            // console.log(props.state.cart);
        return (    
            
                <ProductItem 
                    key={index}
                    product={product}
                    cart={props.state.cart}

                />
            
        )
    })}
    </div>
)

export default Products