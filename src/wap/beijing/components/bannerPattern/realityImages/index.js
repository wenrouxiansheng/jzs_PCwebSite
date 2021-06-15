import React, { Component } from 'react'
import './style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import PropTypes from 'prop-types';

export default class RealityImages extends Component {
    // static propTypes = {
    //     propsData: PropTypes.shape({
    //         data: PropTypes.shape({
    //             list: PropTypes.array.isRequired
    //         })
    //     })
    // }
    bannerNode = (item, index) => {//节点封装
        const { img } = item;
        return <SwiperSlide className="swiper-vague" key={index}>
            <img src={img} alt="" />
        </SwiperSlide>
    }
    render() {
        const { propsData: { data: { list } } } = this.props;
        const node = list.map((item, index) => {
            return this.bannerNode(item, index);
        })
        let num = document.querySelector('html')?.style?.fontSize?.split('px')[0] || 50;
        return (
            <Swiper
                width={4.45 * num}
                slidesPerView={'auto'}
                loop={true}
                speed={800}
                className="realityImages"
                autoplay={{
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }}
            >
                {node}
            </Swiper>
        )
    }
}
