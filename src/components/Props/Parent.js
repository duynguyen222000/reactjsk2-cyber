import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  product = {
    title: "This is a picture",
    desc: "this is description",
    src: "https://images.unsplash.com/photo-1648049941490-b22f4d35fb45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  };
  size = [35, 36, 37, 38];
  showAlert = (name) => {
    alert(name);
  };
  render() {
    return (
      <div>
        <Child
          handleAlert={this.showAlert}
          product={this.product}
          showSize={this.size}
        ></Child>
      </div>
    );
  }
}

export default Parent;
