import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <img src={this.props.propSource} style={{ width: 500 }} alt="" />
      </div>
    );
  }
}

export default Child;
