import React from 'react'


const AddProduct = props => (
    <button
        onClick={() => props.addProductHandler(props.productId)}
    >
        Add in to Basket
    </button>
)





export default AddProduct