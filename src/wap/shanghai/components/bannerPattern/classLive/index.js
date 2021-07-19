import React, { Component } from 'react'
import './style.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export default class ClassLive extends Component {
    bannerNode = (item, index) => {//节点封装
        const { img } = item;
        return <SwiperSlide className="swiper-vague" key={index}>
            <img src={img} alt="" />
        </SwiperSlide>
    }
    render() {
        const { list } = this.props.propsData.data;
        const node = list.map((item, index) => {
            return this.bannerNode(item, index);
        })
        let num = document.querySelector('html')?.style?.fontSize?.split('px')[0] || 50;
        return (
            <Swiper
                width={3.2 * num}
                slidesPerView={'auto'}
                loop={true}
                className="ClassLive"
                autoplay={{
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.swiper-pagination'
                }}
            >
                {node}
                <div className="swiper-pagination">
                </div>
            </Swiper>
        )
    }
}
