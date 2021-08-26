import React, { Component } from "react";
import Product from "./product";
import Introduce from "./introduce";
import Footer from "./footer";
import FirstScreen from "./firstScreen";
import "./style.scss";

export default class pianoShow extends Component {
  state = {
    opacity: 0,
  };
  controlDFisplay = (val) => {
    //设置主内容透明度  跟据首屏滑动距离定透明度
    this.setState({
      opacity: val,
    });
  };

  render() {
    const { opacity } = this.state;
    return (
      <div className="pianoShow">
        <FirstScreen callback={this.controlDFisplay} />

        <div style={{ opacity: opacity, transition: ".5s" }}>
          <Product />
          <Introduce />
          <Footer />
        </div>
      </div>
    );
  }
}
