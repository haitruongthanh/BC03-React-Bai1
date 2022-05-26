import React, { Component } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Item from "./Item";

export default class BaiTapLayoutComponent extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <div className="container pt-4 px-lg-5">
          <div className="row gx-lg-5">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
