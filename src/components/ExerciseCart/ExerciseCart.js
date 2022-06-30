import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductListEXC from "./ProductListEXC";

class ExerciseCart extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    listCart: [],
  };
  handleAddToCart = (product) => {
    let productCart = {
      maSP: product.maSP,
      hinhAnh: product.hinhAnh,
      tenSP: product.tenSP,
      soLuong: 1,
      donGia: product.giaBan,
    };
    let index = this.state.listCart.findIndex(
      (item) => item.maSP === productCart.maSP
    );
    if (index !== -1) {
      this.state.listCart[index].soLuong += 1;
    } else {
      this.state.listCart.push(productCart);
    }
    this.setState({
      listCart: this.state.listCart,
    });
  };
  handleDeleteCart = (cart) => {
    let index = this.state.listCart.findIndex(
      (item) => item.maSP === cart.maSP
    );
    console.log(index);
    if (index !== -1) {
      this.state.listCart.splice(index, 1);
      this.setState({
        listCart: [...this.state.listCart],
      });
    }
  };
  handleNumber = (cart, number) => {
    let gioHang = this.state.listCart;
    let index = gioHang.findIndex((item) => item.maSP === cart.maSP);
    if (index !== -1) {
      if (gioHang[index].soLuong <= 1 && number == -1) {
        return;
      }
      gioHang[index].soLuong += number;
    }
    this.setState({
      listCart: this.state.listCart,
    });
  };
  render() {
    console.log(this.state.listCart);
    return (
      <div className="container">
        <h2 className="text-center">Bài Tập Giỏ Hàng</h2>
        <CartModal
          handleDeleteCart={this.handleDeleteCart}
          handleNumber={this.handleNumber}
          listCart={this.state.listCart}
        ></CartModal>
        <ProductListEXC
          handleAddToCart={this.handleAddToCart}
          products={this.mangSanPham}
        ></ProductListEXC>
      </div>
    );
  }
}

export default ExerciseCart;
