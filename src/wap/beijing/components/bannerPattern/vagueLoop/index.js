import React, { Component } from 'react'
import './style.scss'
import symbolImg from '../../../assets/components/vagueLoop/symbol.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export default class VagueLoop extends Component {
    render() {
        const { list } = this.props.propsData.data;

        const node = list.map((item, index) => {
            return <SwiperSlide className="swiper-vague" key={index} style={{ backgroundImage: `url(${item.img})` }}>
                <div className="text">
                    <img src={symbolImg} alt="" />
                    <img src={symbolImg} alt="" />
                    <p>{item.text}</p>
                </div>
                <img src={item.img} alt="" />
            </SwiperSlide>
        })

        let num = document.querySelector('html')?.style?.fontSize?.split('px')[0] || 50;
        return (
            <Swiper
                width={7.5 * num}
                slidesPerView={'auto'}
                speed={1000}
                loop={true}
                className="vagueLoop"
                autoplay={{
                    disableOnInteraction: false,
                    delay: 3000,
                }}
                pagination={{
                    el: '.swiper-pagination'
                }}
            >
                {node}
                <div className="swiper-pagination" >
                </div>
            </Swiper >
        )
    }
}
