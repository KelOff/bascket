import React from 'react'
import classes from './ProductItem.css'
import Button from '../../../../UI/Buttons/Button'


const ProductItem = props => {
    let count = null
    {props.state.map(productId => {


        if (productId.productId === props.product.id) {
                return count = productId.count
            }
        
    })}
        return (
            <div className={classes.ProductItem}>
                <p> name: { props.product.name } </p> &nbsp;
                <p> price:  { props.product.price } </p> &nbsp;
                
                { count !== null && count !== 0
                ? <Button
                    state={props.state}
                    productId={props.product.id}
                    changeCountHandler={props.changeCountHandler}
                    
                >
                    <p>
                        count: {count}
                    </p>
                </Button>

                : 
                <p
                    onClick={() => props.addProductHandler(props.product.id)}

                > AddProd</p>
                }   

                
                

               
                
            </div>
    )
}

export default ProductItem