import React from 'react'
import ProductItem from './ProductItem/ProductItem'
import classes from './Products.css'

const Products = props => (
    
    <div className={classes.Products}>
    {props.state.products.map((product, index) => {

        return (    
            
                <ProductItem 
                    key={index}
                    product={product}
                    state={props.state.cart}
                    changeCountHandler={props.changeCountHandler}
                    

                />
            
        )
    })}
    </div>
)

export default Products