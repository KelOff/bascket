import React from "react";
import classes from "./BasketGoodsItem.css";

const BasketGoodsItem = (props) => {
  let name;
  let count = props.cart.count;
  let sum;

  (function () {
    props.product.forEach((product) => {
      if (product.id === props.cart.productId) {
        sum = product.price;
        name = product.name;
      }
    });
  })();
  const cost = sum * count;

  return (
    <li className={classes.BasketGoodsItem}>
      In the basket <b>{count}</b> products <b>{name}</b> summary cost: &nbsp;
      <b>{cost}</b>
    </li>
  );
};

export default BasketGoodsItem;
