import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    let { image, name, description } = this.props.dataProduct;
    return (
      <div className="card" style={{ width: "100%", marginBottom: "30px" }}>
        <img className="card-img-top" src={image} alt={name} />
        <div className="card-body">
          <h5 style={{ minHeight: 48 }} className="card-title">
            {name}
          </h5>
          <p className="card-text">{description}</p>
          <a href="http://google.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default ProductItem;
