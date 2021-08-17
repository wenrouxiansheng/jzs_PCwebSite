import React, { Component } from "react";

import "./style.scss";

export default class Introduce extends Component {
  render() {
    return (
      <div className="introduce">
        <img
          src={require("../../../assets/piano/introduce.png").default}
          alt=""
          className="piano-title-1"
        />
        <div className="container">
          <p className="title">JUZISHU</p>
          <p className="subtitle">
            <span>手/工/制/作</span>
          </p>
          <p className="text">
            <strong>JUZISHU</strong>钢琴秉承了欧美先进的制造工艺，
            在音色上也保持着自然纯正的特点。用最精湛的技艺和丰富的灵感赋予钢琴以高贵、灵性。
          </p>
          <p className="text">
            <strong>JUZISHU</strong>
            钢琴以其经典华美的设计、完善的制造工艺、严谨的选材及精细的加工程序，保证了产品的质量。
          </p>
          <p className="text-block">
            每台钢琴都已经过优秀资深的钢琴专家调律及机件、键面的整理，其音质优美、圆润富有穿透力，音准精确度高且十分稳定，触键感觉灵敏，具有舒适的手感。
          </p>


          <div className="detail-text" >
            <img src={require("../../../assets/piano/detail1.png").default} alt="" />
            <p>
              <span>钢琴烤漆：</span>
              <br />
              德国PTFE镜面烤漆，PTFE烤漆为行业公认标准，抗氧化和防烫防划属性上乘外侧防氧化漆层让钢琴在10年之内都光亮如新。
            </p>
          </div>
          <div className="detail-text" >
            <p>
              <span>人性化缓降器：</span>
              <br />
              缓降器为德国技术设计，它的壁厚比一般的钢琴缓降器壁厚都要厚三分之一左右，钢琴装配的德国技术设计缓降器可以使用10万次。
            </p>
            <img src={require("../../../assets/piano/detail2.png").default} alt="" />

          </div>
          <div className="detail-text" >
            <img src={require("../../../assets/piano/detail3.png").default} alt="" />
            <p>
              <span>砝码加铅琴键：</span>
              <br />
              本材进行烘干处理防潮处理，不会因为气温变化而变形。采用砝码平衡加铅技术，再进入操作合模拟击25万次左右。
            </p>
          </div>


        </div>
      </div>
    );
  }
}
