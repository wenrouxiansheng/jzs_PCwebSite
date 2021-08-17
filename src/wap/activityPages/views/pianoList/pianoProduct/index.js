import React, { Component } from "react";

import "./style.scss";

export default class pianoProduct extends Component {
  state = {
    show: false,

    animation: false,
  };
  openDrawer = () => {
    this.setState({
      show: true,
      animation: true,
    });
  };
  closeDrawer = (e) => {
    if (e.target.className === "container") {
      this.setState({
        animation: false,
      });
      setTimeout(() => {
        this.setState({
          show: false,
        });
      }, 280);
    }
  };
  render() {
    const { show, animation } = this.state;
    const {
      modelNumber,
      price,
      img,
      from,
      color,
      size,
      musicWire,
      plank,
      hammer,
      key,
      nail,
    } = this.props.data;
    return (
      <div className="pianoProduct">
        <div className="flex">
          <div className="list-title">
            <p><span>P</span>iano</p>
            <p>JUZISHU</p>
          </div>

          <div className="text">
            <p>
              <span>JZS-</span>
              {modelNumber}
            </p>
            <p>简约奢华品质美感</p>
          </div>

          <p>高品质打造钢琴之最 聆听生活之美</p>
        </div>

        <img alt="" src={img} />

        <p>
          RMB：<strong>{price}</strong>
        </p>

        <img
          alt=""
          src={require("../../../assets/pianoList/flag.png").default}
          onClick={this.openDrawer}
        />
        <div
          className="container"
          style={{
            display: show ? "block" : "none",
            animation: `${
              animation ? "container_fadeIn" : "container_fadeOut"
            } 0.3s ease-in`,
          }}
          onClick={this.closeDrawer}
        >
          <div>
            <p>
              <span>JZS</span>-{modelNumber}
            </p>
            <p>规格参数</p>
            <div>
              <p>
                品牌<span>JUZISHU</span>
              </p>
              <p>
                产地<span>{from}</span>
              </p>
              <p>
                颜色<span>{color}</span>
              </p>
              <p>
                尺寸<span>{size}</span>
              </p>
              <p>
                琴弦<span>{musicWire}</span>
              </p>
              <p>
                踏板<span>{plank}</span>
              </p>
              <p>
                榔头<span>{hammer}</span>
              </p>
              <p>
                琴键<span>{key}</span>
              </p>
              <p>
                弦轴钉<span>{nail}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
