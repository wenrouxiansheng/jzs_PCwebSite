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
            <span>品牌介绍及工艺</span>
          </p>
          <p className="text">
            桔子树十年专注艺术教育，结合数万学员的课堂实践
            及学员对钢琴学习的需求，特推出“JUZISHU10周年纪
            念版钢琴”，采用德国古法工艺、技术、设备，精心
            制造而成，精选德国进口榔头、击弦椎，经久耐用，
            且钢琴音质稳定、音色柔美，键感轻盈，共鸣澎湃。
            JUZISHU钢琴美妙的音色、独特的表现力，使弹奏者仿
            佛置身于典雅的音乐厅，一架让您爱上弹奏的钢琴！
          </p>
          {/* <p className="text">
            <strong>JUZISHU</strong>
            钢琴以其经典华美的设计、完善的制造工艺、严谨的选材及精细的加工程序，保证了产品的质量。
          </p> */}
          <p className="text-block">
            每台钢琴都已经过优秀资深的钢琴专家调律及机件、键面的整理，其音质优美、圆润富有穿透力，音准精确度高且稳定，触键感觉灵敏，具有舒适的手感。
          </p>

          <div className="detail-text">
            <img
              src={require("../../../assets/piano/detail1.png").default}
              alt=""
            />
            <p>
              <span>钢琴烤漆：</span>德国PTFE镜面烤漆
              <br />
              PTFE烤漆为行业公认标准，抗氧化和防烫防划属性上乘。外侧防氧化漆层让钢琴10年之内优美亮丽。
            </p>
          </div>
          <div className="detail-text">
            <p>
              <span>人性化缓降器：</span>德国技术设计
              <br />
              它的壁厚比一般的钢琴缓降器壁厚1/3左右，可以使用<font color="red">10万次左右。</font>
            </p>
            <img
              src={require("../../../assets/piano/detail2.png").default}
              alt=""
            />
          </div>
          <div className="detail-text">
            <img
              src={require("../../../assets/piano/detail3.png").default}
              alt=""
            />
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
