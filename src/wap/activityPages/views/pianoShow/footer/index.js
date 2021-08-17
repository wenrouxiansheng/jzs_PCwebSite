import React, { Component } from "react";

import "./style.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img
          src={require("../../../assets/piano/footer-head.png").default}
          alt=""
        />

        <div className="footer-show">
          <strong>追溯源头</strong>
          <span>了解品质钢琴</span>

          <img
            src={require("../../../assets/piano/footer-show.png").default}
            alt=""
          />
        </div>

        <p className="subtitle">
          <span>木材-1200天木材静置处理</span>
        </p>
        <p className="text">1200天有效静置期</p>
        <p className="text">
          确保每一块木材温湿平衡，都能适应自然反应，趋于稳定和安静
        </p>
        <div className="imgList">
          <img
            src={require("../../../assets/piano/footer-show1.png").default}
            alt=""
          />
          <img
            src={require("../../../assets/piano/footer-show2.png").default}
            alt=""
          />
          <img
            src={require("../../../assets/piano/footer-show3.png").default}
            alt=""
          />
        </div>
        <img
            src={require("../../../assets/piano/footer.png").default}
            alt=""
          />
      </div>
    );
  }
}
