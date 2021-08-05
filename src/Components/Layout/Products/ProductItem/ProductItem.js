import React from 'react'
import classes from './ProductItem.css'
import Button from '../../../../UI/Buttons/Button'
import AddProduct from '../../../../UI/Buttons/AddProduct/AddProduct'

const getProductsCount = (cart, productId) => {
    let productsCount = 0;
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId ) {
            productsCount = cartItem.count;
        }
    });
    return productsCount;
}

const ProductItem = props => {
    const count = getProductsCount(props.cart, props.product.id);

    let renderProductActions;

    if (count > 0) {
        renderProductActions = () => (
            <Button
                state={props.cart}
                productId={props.product.id}
                changeCountHandler={props.changeCountHandler}
            >
                <p>
                    count: {count}
                </p>
            </Button>
        );
    } else {
        renderProductActions = () => (
            <AddProduct
                addProductHandler={props.addProductHandler}
                productId={props.product.id}
            />
        );
    }

    return (
        <div className={classes.ProductItem}>
            <p> name: { props.product.name } </p> &nbsp;
            <p> price:  { props.product.price } </p> &nbsp;
            {renderProductActions()} 
        </div>
    )
}

export default ProductItem