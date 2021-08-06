import React, { Component } from "react";
import Products from "./Products/Products";
import Basket from "./Basket/Basket";

class Layout extends Component {
  state = {
    products: [],
    loadedProducts: false,
    cart: [],
    loadedCart: false,
  };

  componentDidMount() {
    fetch("state/products.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          products: result,
          loadedProducts: true,
        });
      });

    fetch("state/cart.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          cart: result,
          loadedCart: true,
        });
      });
  }

  changeCountHandler = (value, productId) => {
    let updatedCartArray = [...this.state.cart];

    for (let i = 0; i < this.state.cart.length; ++i) {
      if (this.state.cart[i].productId === productId) {
        updatedCartArray[i].count = updatedCartArray[i].count + value;
        if (updatedCartArray[i].count <= 0) {
          updatedCartArray.splice(i, 1);
        }
      }
    }
    this.setState({
      ...this.state,
      cart: updatedCartArray,
    });
  };

  addProductHandler = (productId) => {
    this.setState({
      ...this.state,
      cart: [
        ...this.state.cart,
        {
          productId: productId,
          count: 1,
        },
      ],
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loadedProducts && this.state.loadedCart ? (
          <React.Fragment>
            <Products
              onClick={this.changeCountHandler}
              state={this.state}
              onAdd={this.addProductHandler}
            />
            <Basket state={this.state} />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Layout;
