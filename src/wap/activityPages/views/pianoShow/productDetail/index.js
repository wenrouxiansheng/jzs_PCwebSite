import React, { Component } from "react";

import "./style.scss";

const detailShow = [
  { img: require("../../../assets/piano/img1.png").default, text: "钢琴烤漆" },
  { img: require("../../../assets/piano/img2.png").default, text: "缓降器" },
  { img: require("../../../assets/piano/img3.png").default, text: "实木琴键" },
];

const productDetail = [
  {
    img: require("../../../assets/piano/piano1.png").default,
    from: "中国1",
    color: "黑色亮光（以实物为准）",
    size: "1500*1210*610mm​",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },
  {
    img: require("../../../assets/piano/piano1.png").default,
    from: "中国2",
    color: "黑色亮光（以实物为准）",
    size: "1500*1210*610mm​",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },
  {
    img: require("../../../assets/piano/piano1.png").default,
    from: "中国3",
    color: "黑色亮光（以实物为准）",
    size: "1500*1210*610mm​",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },
];

export default class ProductDetail extends Component {
  state = {
    pianoDetailList: [],
  };
  render() {
    const { product } = this.props;
    const data = productDetail[product];
    return (
      <div className="productDetail">
        <img
          src={require("../../../assets/piano/piano-title.png").default}
          alt=""
          className="piano-title-1"
        />

        <div className="piano-detail-container">
          <div>
            {detailShow.map((item, index) => {
              return (
                <p key={index}>
                  <img src={item.img} alt="" />
                  <span>{item.text}</span>
                </p>
              );
            })}
          </div>
          <div>
            <img src={data.img} alt="" />
          </div>
        </div>

        <img
          src={require("../../../assets/piano/piano-title2.png").default}
          alt=""
          className="piano-title-2"
        />
        <p className="piano-title-2-subtitle">
          高品质打造钢琴之最，聆听生活之美
        </p>

        <div className="piano-detail-parameter">
          <div>
            <span>品牌</span>
            <span>JUZISHU</span>
            <p>
              产地<span>{data.from}</span>
            </p>
            <p>
              颜色<span>{data.color}</span>
            </p>
            <p>
              尺寸<span>{data.size}</span>
            </p>
            <p>
              琴弦<span>{data.musicWire}</span>
            </p>
            <p>
              踏板<span>{data.plank}</span>
            </p>
            <p>
              榔头<span>{data.hammer}</span>
            </p>
            <p>
              琴键<span>{data.key}</span>
            </p>
            <p>
              弦轴钉<span>{data.nail}</span>
            </p>
          </div>
          <div>
            <img
              src={require("../../../assets/piano/param-right.png").default}
              alt=""
              className="piano-title-2"
            />
          </div>
        </div>
      </div>
    );
  }
}
