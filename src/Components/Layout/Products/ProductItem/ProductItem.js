import React from 'react'


const ProductItem = props => {
    let count = 0
    {props.cart.map((productId, index) => {
        // console.log(productId);
        // console.log(props.product.id);
        // console.log(props.product.id);
        if (productId.productId === props.product.id) {
                return count = productId.productId
            }
            // console.log(count);
        
        
    })}
        return (
            <div style={{border: '1px solid black'}}>
                <p> name: { props.product.name } </p>
                <p> price:  { props.product.price } </p>
                <button>-</button>
                <p> count: {count}</p>
                <button>+</button>

               
                
            </div>
    )
}

export default ProductItem