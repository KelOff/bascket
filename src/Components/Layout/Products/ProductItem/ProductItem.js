import React from 'react'
import classes from './ProductItem.css'
import Button from '../../../../UI/Buttons/Button'


const ProductItem = props => {
    let count = 0
    {props.state.map(productId => {


        if (productId.productId === props.product.id) {
                return count = productId.productId
            }
        
    })}
        return (
            <div className={classes.ProductItem}>
                <p> name: { props.product.name } </p> &nbsp;
                <p> price:  { props.product.price } </p> &nbsp;
                
                <Button
                    changeCountHandler={props.changeCountHandler}
                    state={props.state}
                    productId={props.product.id}
                >
                    <p>
                        count: {count}
                    </p>
                </Button>
                

               
                
            </div>
    )
}

export default ProductItem