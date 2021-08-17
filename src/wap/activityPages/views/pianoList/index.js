import React, { Component } from "react";
import Footer from "../pianoShow/footer";
import PianoProduct from "./pianoProduct";
import "./style.scss";

const pianoListData = [
  {
    modelNumber: "123W",
    price: "28800",
    img: require("../../assets/pianoList/piano1.png").default,
    from: "中国",
    color: "黑色亮光(以实物为准)",
    size: "1500*1210*610mm​",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },
  {
    modelNumber: "124W",
    price: "28802",
    img: require("../../assets/pianoList/piano1.png").default,
    from: "中国2",
    color: "黑色亮光(以实物为准)",
    size: "1500*1210*610mm​",
    musicWire: "Roslou勒斯劳琴弦",
    plank: "纯铜脚踏/精钢脚踏",
    hammer: "德国进口榔头",
    key: "实木琴键-逐键配重工艺",
    nail: "镀钛乌金弦轴钉",
  },
  {
    modelNumber: "125W",
    price: "28803",
    img: require("../../assets/pianoList/piano1.png").default,
    from: "中国2",
    color: "黑色亮光(以实物为准)",
    size: "1500*1210*610mm​",
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
