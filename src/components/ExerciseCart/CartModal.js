import React, { Component } from "react";

class CartModal extends Component {
  total = () => {
    let { listCart } = this.props;

    return listCart.reduce((total, item, index) => {
      return (total += item.soLuong);
    }, 0);
  };
  totalMoney = () => {
    return this.props.listCart
      .reduce((total, item, index) => {
        return (total += item.soLuong * item.donGia);
      }, 0)
      .toLocaleString();
  };
  renderListCart = () => {
    let { listCart } = this.props;
    return listCart.map((cart, index) => {
      return (
        <tr key={index}>
          <td>{cart.maSP || "Defaul value"}</td>
          <td>
            <img
              style={{ width: "50px" }}
              src={cart.hinhAnh}
              alt={"phone image" || cart.hinhAnh}
            />
          </td>
          <td>{cart.tenSP || "Defaul value"}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleNumber(cart, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            {cart.soLuong || "Defaul value"}
            <button
              onClick={() => {
                this.props.handleNumber(cart, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>{cart.donGia || "Defaul value"}</td>
          <td>{cart.soLuong * cart.donGia || "Defaul value"}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleDeleteCart(cart);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div
          style={{ cursor: "pointer" }}
          className="text-right"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span
            style={{
              width: "20px",
              height: "20px",
              display: "inline-block",
              textAlign: "center",
              lineHeight: "1",
              color: "white",
              backgroundColor: "black",
              margin: "0 5px",
              borderRadius: "50%",
            }}
          >
            ({this.total()})
          </span>{" "}
          Giỏ hàng
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            style={{ minWidth: "1000px" }}
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderListCart()}</tbody>
                  <tfoot>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>Total:</th>
                      <th>{this.totalMoney()}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartModal;
