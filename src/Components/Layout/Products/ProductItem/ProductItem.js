import React from 'react'
import classes from './ProductItem.css'
import Button from '../../../../UI/Buttons/Button'
import AddProduct from '../../../../UI/Buttons/AddProduct/AddProduct'


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
                
                { count !== null && count > 0
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
                <AddProduct
                    addProductHandler={props.addProductHandler}
                    productId={props.product.id}
                > </AddProduct>
                }   

                
                

               
                
            </div>
    )
}

export default ProductItem