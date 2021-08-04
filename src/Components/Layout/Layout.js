import React, { Component } from 'react'
import Products from './Products/Products'
import Basket from './Basket/Basket'
import classes from './Layout.css'
// import products from '../../products.json'


class Layout extends Component {
    
    

    state={
        products:[],
        loadedProducts: false,
        cart: [],
        loadedCart: false 
    }
    
    componentDidMount() {
        fetch('state/products.json')
        .then( res => res.json())
        .then(
            (result) => {
                this.setState({
                    products: result,
                    loadedProducts: true
                })
            }
        )
        fetch('state/cart.json')
        .then( res => res.json())
        .then(
            (result) => {
                this.setState({
                    cart: result,
                    loadedCart: true
                })
            }
        )
    }

    changeCountHandler = (value, productId) => {
        let updatedCartArray = []
        
        for (let i = 0; i < this.state.cart.length; ++i) {
            updatedCartArray.push(this.state.cart[i])
            if (this.state.cart[i].productId === productId) {
                updatedCartArray[i].count = updatedCartArray[i].count + value
            }
        }
        for (let i = 0; i < updatedCartArray.length; i++) {
            if (updatedCartArray[i].count <= 0) {
                updatedCartArray.splice(i, 1)
            }
        }

        this.setState({
            ...this.state,
            cart: updatedCartArray, 
        })
    }
    
    addProductHandler = (productId) => {
        this.setState ({
            ...this.state,
            cart: [
                ...this.state.cart,
                {
                    productId: productId,
                    count: 1,
                }
            ],
        })
    }
        
    render() {
        this.state.cart.sort(function (a, b) {
            if (a.productId > b.productId) {
                return 1
            }
            if (a.productId < b.productId) {
                return -1
            }
            return 0
        })
        return (
            <React.Fragment>
                {this.state.loadedProducts && this.state.loadedCart
                ? <React.Fragment>
                    <Products 
                        onClick={this.changeCountHandler}
                        state={this.state}
                        onAdd={this.addProductHandler}
                    />
                    <Basket 
                        state={this.state}
                    />  
                  </React.Fragment>
                : null}
            </React.Fragment>
        )
    }
}

export default Layout