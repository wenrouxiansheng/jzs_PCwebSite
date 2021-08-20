import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import ProductDetail from "../productDetail";
import "./style.scss";

export default class Product extends Component {
  state = {
    pianoSlideList: [
      {
        image: require("../../../assets/piano/121B.png").default,
        title: "JZS-121B",
        subtitle: "简约奢华品质美感",
        price: "24800",
        link: "/site/wap/activity/pianoList",
      },
      {
        image: require("../../../assets/piano/123B.png").default,
        title: "JZS-123B",
        subtitle: "简约奢华品质美感",
        price: "26800",
        link: "/site/wap/activity/pianoList",
      },
      {
        image: require("../../../assets/piano/126B.png").default,
        title: "JZS-126B",
        subtitle: "简约奢华品质美感",
        price: "34800",
        link: "/site/wap/activity/pianoList",
      },
    ],
    realIndex: 0,
  };
  swiperObj = null; //保存swiper实例

  slideNode = () => {
    //slide节点
    const { pianoSlideList } = this.state;
    return pianoSlideList.map((item, index) => {
      return (
        <SwiperSlide className="sliderec-inset" key={index}>
          <div>
            <img src={item.image} alt="" className="piano-image" />
            <div className="piano-text">
              <p className="piano-title">{item.title}</p>
              <p className="piano-subtitle">{item.subtitle}</p>
              <p className="piano-price">
                RMB：<strong>{item.price}</strong>
              </p>
              <Link to={item.link} className="piano-list">
                查看更多
              </Link>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  prevSlide = () => {
    //上一个
    this.swiperObj.slidePrev();
  };
  nextSlide = () => {
    //下一个
    this.swiperObj.slideNext();
  };
  listeningSliding = (e) => {
    //监听当前节点对应的下标

    this.setState({
      realIndex: e.realIndex,
    });
  };
  render() {
    return (
      <div className="product">
        <img
          src={require("../../../assets/piano/title.png").default}
          alt=""
          className="title"
        />
        <p className="subtitle">卓越品质追求独特美感</p>

        <Swiper
          slidesPerView={"auto"}
          speed={1000}
          loop={true}
          autoplay={false}
          onSlideChange={this.listeningSliding}
          onSwiper={(swiper) => {
            this.swiperObj = swiper;
          }}
          className="swiper-container"
        >
          <img
            src={require("../../../assets/piano/next.png").default}
            onClick={this.prevSlide}
            alt=""
            className="slide-button prev-slide"
          />
          <img
            src={require("../../../assets/piano/next.png").default}
            onClick={this.nextSlide}
            alt=""
            className="slide-button next-slide"
          />

          {this.slideNode()}
        </Swiper>

        <img
          src={require("../../../assets/piano/show.png").default}
          alt=""
          className="piano-show-image"
        />

        <ProductDetail product={this.state.realIndex} />
      </div>
    );
  }
}
