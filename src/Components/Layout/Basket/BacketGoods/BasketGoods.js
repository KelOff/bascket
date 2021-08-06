import React from "react";
import BasketGoodsItem from "./BasketGoodsItem/BasketGoodsItem";
import classes from "./BasketGoods.css";

const BasketGoods = (props) => (
  <ul className={classes.BasketGoods}>
    {props.state.cart.map((product) => {
      return (
        <BasketGoodsItem
          key={product.productId}
          product={props.state.products}
          cart={product}
        />
      );
    })}
  </ul>
);

export default BasketGoods;
