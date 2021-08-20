import React, { Component } from "react";
import Footer from "../pianoShow/footer";
import PianoProduct from "./pianoProduct";
import "./style.scss";

const pianoListData = [
  {
    modelNumber: "123W",
    price: "29500",
    img: require("../../assets/pianoList/piano-123W.png").default,
    from: "中国",
    color: "白色亮光(以实物为准)",
    size: "1520mm*620mm*1230mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },

  {
    modelNumber: "126B",
    price: "36800",
    img: require("../../assets/pianoList/piano-126B.png").default,
    from: "中国",
    color: "黑色亮光(以实物为准)",
    size: "1530mm*630mm*1260mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },

  {
    modelNumber: "126Y3",
    price: "39800",
    img: require("../../assets/pianoList/piano-126Y3.png").default,
    from: "中国",
    color: "白色亮光(以实物为准)",
    size: "1530mm*630mm*1260mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },

  {
    modelNumber: "126Y8",
    price: "42800",
    img: require("../../assets/pianoList/piano-126Y8.png").default,
    from: "中国",
    color: "白色亮光(以实物为准)",
    size: "1530mm*630mm*1260mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },

  {
    modelNumber: "126Y9",
    price: "43900",
    img: require("../../assets/pianoList/piano-126Y9.png").default,
    from: "中国",
    color: "白色亚光(以实物为准)",
    size: "1530mm*630mm*1260mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },

  {
    modelNumber: "125Y1",
    price: "39800",
    img: require("../../assets/pianoList/piano-125Y1.png").default,
    from: "中国",
    color: "棕色亚光(以实物为准)",
    size: "1520mm*620mm*1250mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },

  {
    modelNumber: "126Y2",
    price: "41800",
    img: require("../../assets/pianoList/piano-126Y2.png").default,
    from: "中国",
    color: "棕色亚光(以实物为准)",
    size: "1530mm*630mm*1260mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },

  {
    modelNumber: "133Y7",
    price: "56800",
    img: require("../../assets/pianoList/piano-133Y7.png").default,
    from: "中国",
    color: "全雕花(以实物为准)",
    size: "1530mm*630mm*1330mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },

  {
    modelNumber: "125Y",
    price: "38800",
    img: require("../../assets/pianoList/piano-125Y.png").default,
    from: "中国",
    color: "棕色亚光(以实物为准)",
    size: "1520mm*620mm*1250mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },

  {
    modelNumber: "126Y1",
    price: "40800",
    img: require("../../assets/pianoList/piano-126Y1.png").default,
    from: "中国",
    color: "棕色亚光(以实物为准)",
    size: "1530mm*630mm*1260mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },

  {
    modelNumber: "128Y",
    price: "45800",
    img: require("../../assets/pianoList/piano-128Y.png").default,
    from: "中国",
    color: "棕色亚光(以实物为准)",
    size: "1530mm*630mm*1280mm",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },
];
export default class pianoList extends Component {
  render() {
    return (
      <div className="pianoList">
        <div className="header">
          <img
            src={require("../../assets/pianoList/first-bg.png").default}
            alt=""
          />
          <img
            src={require("../../assets/pianoList/title.png").default}
            alt=""
          />
          <img
            src={require("../../assets/pianoList/text.png").default}
            alt=""
          />
          <div className="text-container">
            <p className="subtitle">
              <span>古法技艺/流传百年</span>
            </p>
            <p className="text">
              JUZISHU钢琴不仅适用于古典音乐，也适用于爵士、摇滚和流行音乐，制琴师
              用心的制造出一台具有灵魂与生命的钢琴，存在着情感和思想，让他们在传承天籁之
              音的同时，用他那行云流水的声音大胆诠释了人们的情感。
              选择迪奥拉钢琴，一种全新的生活方式；
            </p>
          </div>
        </div>

        {pianoListData.map((item, index) => {
          return <PianoProduct data={item} key={index} />;
        })}

        <Footer />
      </div>
    );
  }
}
