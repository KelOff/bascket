import React from 'react'
import classes from './AddProduct.css'


const AddProduct = props => (
    <button className={classes.AddProduct}
        onClick={() => props.addProductHandler(props.productId)}
    >
        Add in to Basket
    </button>
)





export default AddProduct