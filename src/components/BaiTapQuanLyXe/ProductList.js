import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  products = [
    {
      id: 1,
      name: "black car",
      img: "./images/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./images/products/red-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./images/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 3,
      name: "Steel car",
      img: "./images/products/steel-car.jpg",
      price: 4000,
    },
  ];
  render() {
    return (
      <div className="container">
        <h2>Danh sách xe - Số lượng : {this.products.length}</h2>
        <div className="row">
          {this.products.map((product, index) => {
            return (
              <div key={index} className="col-4">
                <ProductItem
                  setStateModal={this.props.setStateModal}
                  products={product}
                ></ProductItem>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
