import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

SwiperCore.use([Autoplay]);
export default class gradingTestShowLoop extends Component {
    state = {
        list: [
            { address: "#", img: require('../../../assets/homepage/music.png').default, title: "声乐考级", text: 'VOCAL MUSIC EMPLOYS' },
            { address: "#", img: require('../../../assets/homepage/dance.png').default, title: "舞蹈考级", text: 'DANCE DISTINCTION' },
            { address: "#", img: require('../../../assets/homepage/instrumentalMusic.png').default, title: "器乐考级", text: 'INSTRUMENTAL MUSIC' },
            { address: "#", img: require('../../../assets/homepage/art.png').default, title: "美术考级", text: 'FINE ARTS' },
        ],
    }
    bannerNode = (item, index) => {//节点封装
        const { address, img, title, text } = item;
        return <SwiperSlide className="swiper-vague" key={index}>
            <Link to={address}>
                <img src={img} alt="" />
                <p><strong>{title}</strong>{text}</p>
                <button>了解更多</button>
            </Link>
        </SwiperSlide>
    }
    render() {
        const { list } = this.state;
        const node = list.map((item, index) => {
            return this.bannerNode(item, index);
        })
        let num = document.querySelector('html')?.style?.fontSize?.split('px')[0] || 50;
        return (
            <Swiper
                width={3.58 * num}
                slidesPerView={'auto'}
                loop={true}
                className="gradingTestShowLoop"
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
