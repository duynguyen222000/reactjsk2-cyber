import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.arrProduct.map((product, index) => (
          <div key={index} className="col-3">
            <ProductItem dataProduct={product} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
