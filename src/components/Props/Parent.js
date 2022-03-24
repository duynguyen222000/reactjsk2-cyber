import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  src =
    "https://images.unsplash.com/photo-1648049941490-b22f4d35fb45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
  render() {
    return (
      <div>
        <Child propSource={this.src}></Child>
      </div>
    );
  }
}

export default Parent;
