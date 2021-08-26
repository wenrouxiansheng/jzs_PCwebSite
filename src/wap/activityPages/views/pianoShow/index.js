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
