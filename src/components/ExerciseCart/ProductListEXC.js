import React, { Component } from "react";
import ProductItemEXC from "./ProductItemEXC";

class ProductListEXC extends Component {
  renderProducts = () => {
    return this.props.products.map((product, index) => {
      return (
        <div key={index} className="col-4">
          <ProductItemEXC
            handleAddToCart={this.props.handleAddToCart}
            product={product}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row">{this.renderProducts()}</div>
      </div>
    );
  }
}

export default ProductListEXC;
