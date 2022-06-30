import React, { Component } from "react";

class ProductItemEXC extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card text-white bg-primary">
        <img
          style={{ minHeight: "348px" }}
          className="card-img-top"
          src={product.hinhAnh}
          alt={product.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <div className="d-flex justify-content-between">
            <button
              onClick={() => {
                alert("comming soon");
              }}
              className="btn btn-warning"
            >
              Xem chi tiết
            </button>
            <button
              onClick={() => {
                this.props.handleAddToCart(product);
              }}
              className="btn btn-success"
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItemEXC;
