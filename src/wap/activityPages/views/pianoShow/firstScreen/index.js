import React, { Component } from "react";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "./style.scss";

const COLOR = "#bda67e";
const TOUCH = {
  flag: false,
  touchStart: null,
};
const maxHeight = document.documentElement.clientHeight;
export default class FirstScreen extends Component {
  state = {
    containerTop: 0,
    transition: false,
  };
  touchStart = (e) => {
    //开启节流阀
    const { clientY } = e.changedTouches[0];
    TOUCH.flag = true;
    TOUCH.touchStart = clientY;
  };
  touchMove = (e) => {
    e.preventDefault();
    if (TOUCH.flag) {
      const { clientY } = e.changedTouches[0];
      if (clientY - TOUCH.touchStart > 0) {
        //top不可超过0
        return;
      }
      const level = maxHeight / 10;

      const num = Math.ceil(-(clientY - TOUCH.touchStart) / level) / 10;
      this.props.callback(num);
      this.setState({
        containerTop: clientY - TOUCH.touchStart,
      });
    }
  };
  componentDidMount() {
    //用原生事件阻止上滑时导致下层滚动条滑动
    document
      .querySelector(".firstScreen")
      .addEventListener("touchmove", this.touchMove, { passive: false });
  }

  componentWillUnmount() {
    document
      .querySelector(".firstScreen")
      .removeEventListener("touchmove", this.touchMove, { passive: false });
  }

  touchEnd = (e) => {
    const { clientY } = e.changedTouches[0];

    if (TOUCH.touchStart - clientY > 50) {
      //移动大于50像素自动回收
      this.props.callback(1);
      this.setState({
        containerTop: -maxHeight,
        transition: true,
      });
    } else {
      //小于50回缩
      this.setState({
        containerTop: 0,
        transition: true,
      });
      //回正以后要把过渡效果关闭
      setTimeout(() => {
        this.setState({
          transition: false,
        });
      }, 500);
    }
    TOUCH.flag = false;
    TOUCH.touchStart = null;
  };
  render() {
    const { containerTop, transition } = this.state;
    return (
      <div
        className="firstScreen"
        onTouchStart={this.touchStart}
        onTouchEnd={this.touchEnd}
        style={{
          top: `${containerTop}px`,
          transition: transition ? ".5s" : null,
        }}
      >
        <img
          src={require("../../../assets/piano/first-screen-title.png").default}
          alt=""
        />
        <img
          src={require("../../../assets/piano/first-screen-logo.png").default}
          alt=""
        />
        <p>源/于/德/国</p>
        <img
          src={require("../../../assets/piano/first-screen-list.png").default}
          alt=""
        />
        <DoubleArrowIcon
          style={{ color: COLOR, fontSize: "0.6rem" }}
          className="icon"
        />
      </div>
    );
  }
}
