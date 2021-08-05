import React from "react";
import BasketGoods from "./BacketGoods/BasketGoods";
import classes from "./Basket.css";

const Bascket = (props) => {
  let result = 0;
  for (let i = 0; i < props.state.cart.length; i++) {
    if (
      props.state.cart[i].productId ===
      props.state.products[props.state.cart[i].productId - 1].id
    ) {
      if (props.state.cart[i].count >= 0) {
        result =
          result +
          props.state.products[props.state.cart[i].productId - 1].price *
            props.state.cart[i].count;
      }
    }
  }

  return (
    <div className={classes.Basket}>
      <p>
        {" "}
        Products in the basket: &nbsp;
        <span>{props.state.cart.length}</span>
      </p>
      <BasketGoods state={props.state} />
      <p>
        Cost: <span>{result}</span>{" "}
      </p>
    </div>
  );
};

export default Bascket;
