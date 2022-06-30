import React, { Component } from "react";

class SanPham extends Component {
  render() {
    let { sanPhamProps } = this.props;
    return (
      <div className="card text-white bg-primary">
        <img
          style={{ minHeight: "348px" }}
          className="card-img-top img-fluid"
          src={sanPhamProps.hinhAnh}
          alt={sanPhamProps.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPhamProps.tenSP}</h4>
          <button
            onClick={() => {
              this.props.handleDetail(sanPhamProps);
            }}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}

export default SanPham;
