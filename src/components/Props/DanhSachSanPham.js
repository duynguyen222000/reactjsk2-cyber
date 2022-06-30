import React, { Component } from "react";
import SanPham from "./SanPham";
class DanhSachSanPham extends Component {
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
    sanPhamChiTiet: {
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
  };
  renderProduct = () => {
    return this.mangSanPham.map((product, index) => {
      return (
        <div key={index} className="col-4">
          <SanPham
            handleDetail={this.handleDetail}
            sanPhamProps={product}
          ></SanPham>
        </div>
      );
    });
  };
  handleDetail = (product) => {
    this.setState({ sanPhamChiTiet: product });
  };
  render() {
    const {
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      hinhAnh,
    } = this.state.sanPhamChiTiet;
    return (
      <div>
        <div className="container">
          <h3>Danh sách sản phẩm</h3>
          <div className="row">{this.renderProduct()}</div>
          <div className="row">
            <div className="col-4">
              <h3>{tenSP}</h3>
              <img className="img-fluid" src={hinhAnh} alt="" />
            </div>
            <div className="col-8">
              <h3>Thông số kỹ thuật</h3>
              <table className="table table-striped table-light">
                <tbody>
                  <tr>
                    <th scope="row">Màn hình</th>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <th scope="row">Hệ điều hành</th>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <th scope="row">Camera trước</th>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <th scope="row">Camera sau</th>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <th scope="row">RAM</th>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <th scope="row">ROM</th>
                    <td>{rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DanhSachSanPham;
