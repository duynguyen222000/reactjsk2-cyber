import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

class BaiTapQuanLyXe extends Component {
  state = {
    productDetail: {
      id: 1,
      name: "black car",
      img: "./images/products/black-car.jpg",
      price: 1000,
    },
  };
  handleSetState = (newState) => {
    this.setState({
      productDetail: newState,
    });
  };
  render() {
    return (
      <div>
        <Modal content={this.state.productDetail}></Modal>
        <ProductList setStateModal={this.handleSetState}></ProductList>
      </div>
    );
  }
}

export default BaiTapQuanLyXe;
