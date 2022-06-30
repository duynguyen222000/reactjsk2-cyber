import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const product = this.props.products;
    return (
      <div>
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={product.img} alt={product.img} />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.price}</p>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => {
                this.props.setStateModal(product);
              }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default ProductItem;
