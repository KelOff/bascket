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
              count: 3,
            }
          ]  
    }

    
   
    changeCountHandler = (value, productId) => {
        // console.log( this.state.cart )
        // console.log(value);
        console.log(productId);
        this.setState({
            // cart: this.state.cart[productId - 1 ].count + value
            
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <Products 
                    changeCountHandler={this.changeCountHandler}
                    state={this.state}
                />

                {/* <Bascket 
                    state={this.state}
                /> */}
            </React.Fragment>
        )
    }
}

export default Layout