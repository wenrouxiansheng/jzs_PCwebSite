import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';


export default class TeacherLoop extends Component {
    render() {
        const { list } = this.props.propsData.data;
        const node = list.map((item, index) => {
            return <SwiperSlide className="swiper-slide" key={index}>
                <Link to={item.address}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                    <p>教龄：{item.duration}</p>
                </Link>
            </SwiperSlide>
        })
        let num = document.querySelector('html')?.style?.fontSize?.split('px')[0] || 50;
        return (
            <Swiper
                width={2.6 * num}
                slidesPerView={'auto'}
                speed={1000}
                loop={true}
                className="Exhibition-teacherLoop"
                autoplay={true}
            >
                {node}
            </Swiper>
        )
    }
}
