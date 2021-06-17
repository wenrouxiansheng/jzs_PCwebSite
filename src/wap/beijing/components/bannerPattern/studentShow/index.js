import React, { Component } from 'react'
import './style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export default class StudentShowLoop extends Component {
    bannerNode = (item, index) => {//节点封装
        const { img } = item;
        return <SwiperSlide className="swiper-vague" key={index}>
            <img src={img} alt="" />
        </SwiperSlide>
    }
    render() {
        const { propsData: { data: { list, wait } } } = this.props;
        const node = list.map((item, index) => {
            return this.bannerNode(item, index);
        })
        let num = document.querySelector('html')?.style?.fontSize?.split('px')[0] || 50;
        return (
            <Swiper
                width={2.4 * num}
                slidesPerView={'auto'}
                loop={true}
                speed={800}
                className="Exhibition-character"
                autoplay={{
                    delay: wait,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }}
            >
                {node}
            </Swiper>
        )
    }
}
