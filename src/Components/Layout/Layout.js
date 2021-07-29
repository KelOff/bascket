import React, { Component } from 'react'
import Products from './Products/Products'
import Bascket from './Bascket/Bascket'
import classes from './Layout.css'

class Layout extends Component {

    state = {
        products: [
            {
            id: 1,
            name: 'Product 1',
            price: 100,
            },
            {
            id: 2,
            name: 'Product 2',
            price: 200,
            },
            {
            id: 3,
            name: 'Product 3',
            price: 100,
            },
            {
            id: 4,
            name: 'Product 4',
            price: 5,
            }
        ],
        cart: [
            {
              productId: 1,
              count: 1,
            },
            {
              productId: 3,
              count: 2,
            }
          ]  
    }


    changeCountHandler = (value, productId) => {
        let updatedCartArray = []
        
        for (let i = 0; i < this.state.cart.length; ++i) {
            updatedCartArray.push(this.state.cart[i]);
            if (this.state.cart[i].productId === productId) {
                updatedCartArray[i].count = updatedCartArray[i].count + value
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
  
        return (
            <React.Fragment>
                <Products 
                    onClick={this.changeCountHandler}
                    state={this.state}
                    onAdd={this.addProductHandler}
                />
             

                {/* <Bascket 
                    state={this.state}
                /> */}
            </React.Fragment>
        )
    }
}

export default Layout