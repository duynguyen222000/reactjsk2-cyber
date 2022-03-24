import React, { Component } from "react";

class Child extends Component {
  render() {
    let { src, title, desc } = this.props.product;
    console.log(this.props.product);
    return (
      <div>
        <img src={src} style={{ width: 200 }} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <button
          onClick={() => {
            this.props.handleAlert(desc);
          }}
        >
          Detail
        </button>
      </div>
    );
  }
}

export default Child;
