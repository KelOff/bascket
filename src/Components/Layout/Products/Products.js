import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.css";

const Products = (props) => (
  <div className={classes.Products}>
    {props.state.products.map((product) => {
      return (
        <ProductItem
          key={product.id}
          product={product}
          cart={props.state.cart}
          changeCountHandler={props.onClick}
          addProductHandler={props.onAdd}
        />
      );
    })}
  </div>
);

export default Products;
