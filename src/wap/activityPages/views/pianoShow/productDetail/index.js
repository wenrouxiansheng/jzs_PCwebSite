import React, { Component } from "react";

import "./style.scss";

const detailShow = [
  { img: require("../../../assets/piano/img1.png").default, text: "钢琴烤漆" },
  { img: require("../../../assets/piano/img2.png").default, text: "缓降器" },
  { img: require("../../../assets/piano/img3.png").default, text: "实木琴键" },
];

const productDetail = [
  {
    img: require("../../../assets/piano/121B.png").default,
    from: "中国",
    color: "黑色亮光弯腿",
    size: "1500mm*620mm*1210mm",
    musicWire: "德国“ROSLAU”勒斯劳琴弦",
    plank: "高级镀铬踏板",
    hammer: "德国顶级羊毛毡红木榔头",
    key: "白松复合实木白键",
    nail: "镀钛乌金弦轴钉",
    number: "121B",
  },
  {
    img: require("../../../assets/piano/123B.png").default,
    from: "中国",
    color: "黑色亮光",
    size: "1230mm*1530mm*610mm​",
    musicWire: "德国“ROSLAU”勒斯劳琴弦",
    plank: "高级镀铜踏板",
    hammer: "德国顶级羊毛毡红木榔头",
    key: "白松复合实木白键并逐键加铅",
    nail: "镀钛乌金弦轴钉",
    number: "123B",
  },
  {
    img: require("../../../assets/piano/126B.png").default,
    from: "中国",
    color: "黑色亮光",
    size: "1260mm*1530mm*610mm​",
    musicWire: "德国“ROSLAU”勒斯劳琴弦",
    plank: "高级镀铜踏板",
    hammer: "德国顶级羊毛毡红木榔头",
    key: "白松复合实木白键并逐键加铅",
    nail: "镀钛乌金弦轴钉",
    number: "126B",
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

        <div className="piano-title-2">
          <p>
            <span>JZS</span>-{data.number}钢琴
          </p>
          <p className="subtitle">
            <span>立式经典</span>
          </p>
        </div>
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
