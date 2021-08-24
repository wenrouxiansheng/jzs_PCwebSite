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
    size: "1500mm*610mm*1210mm",
    musicWire: "德国“ROSLAU”勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
    number: "121B",
    trait:
      "外观简洁大方，平面右盘配衬方形虎脚，内置进口双缓降器,采用家庭用琴配置，是一款性价比较高的入门级钢琴。",
    mark: "翻砂蝶形铁骨工艺，一次成型",
    soundboard: "云杉实木复合精制音板",
    oilPaint: "德国无氧无污染天然酵化镜面漆",
    slowDescent: "高端内置缓降器",
    action: "雷诺式击弦机",
    MovingRod: "高级防锈合金联动装置",
  },
  {
    img: require("../../../assets/piano/123B.png").default,
    from: "中国",
    color: "黑色亮光",
    size: "1500mm*1230mm*610mm​",
    musicWire: "德国“ROSLAU”勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
    number: "123B7",
    trait: "三上门拼接、弯腿。",
    mark: "全框铁骨工艺，一次成型，保证更大拉力",
    soundboard: "云杉实木复合精制音板",
    oilPaint: "德国无氧无污染天然酵化镜面漆",
    slowDescent: "高端内置缓降器",
    action: "雷诺式击弦机",
    MovingRod: "品质天然实木联动装置",
  },
  {
    img: require("../../../assets/piano/126B.png").default,
    from: "中国",
    color: "黑色亮光",
    size: "1530mm*1250mm*610mm​",
    musicWire: "德国“ROSLAU”勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
    number: "126B",
    trait: "大谱台设计、弯腿",
    mark: "全框铁骨工艺，一次成型，保证更大拉力",
    soundboard: "云杉实木复合精制音板",
    oilPaint: "德国无氧无污染天然酵化镜面漆",
    slowDescent: "高端内置缓降器和三角琴同款",
    action: "雷诺式击弦机",
    MovingRod: "品质天然实木联动装置",
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
          <span>品牌</span>
          <span>JUZISHU</span>
          <div className="text">外形特点：{data.trait}</div>
          <div className="text">配置详情：</div>
          <p>
            产地<span>{data.from}</span>
          </p>
          <p>
            马克<span>{data.mark}</span>
          </p>
          <p>
            音板<span>{data.soundboard}</span>
          </p>
          <p>
            油漆<span>{data.oilPaint}</span>
          </p>
          <p>
            缓降<span>{data.slowDescent}</span>
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
            弦轴钉<span className="padding">{data.nail}</span>
          </p>
          <p>
            击弦机<span className="padding">{data.action}</span>
          </p>
          <p>
            联动杆<span className="padding">{data.MovingRod}</span>
          </p>
          <p>
            （颜色、尺寸以实物为准）
          </p>
        </div>
      </div>
    );
  }
}
