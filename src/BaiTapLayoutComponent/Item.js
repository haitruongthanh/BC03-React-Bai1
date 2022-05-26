/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="col-lg-3 col-xxl-3 mb-5">
        <div className="card" style={{ width: "17rem" }}>
          <img
            className="card-img-top"
            data-src="holder.js/100px180/"
            alt="520x325"
            style={{ height: 180, width: "100%", display: "block" }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18100d22565%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18100d22565%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <div className="card-body my-3">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-header border-top border-0 py-3">
            <a href="#" className="btn btn-primary">
              Find Out Move!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
