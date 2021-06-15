import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';


export default class TeacherLoop extends Component {
    state = {
        list: [
            { name: "王晓玉1", duration: "5年", img: require("../../../assets/teacherList/teacher1_05.png").default, address: "#" },
            { name: "王晓玉2", duration: "5年", img: require("../../../assets/teacherList/teacher2_05.png").default, address: "#" },
            { name: "王晓玉3", duration: "5年", img: require("../../../assets/teacherList/teacher3_05.png").default, address: "#" },
            { name: "王晓玉4", duration: "5年", img: require("../../../assets/teacherList/teacher4_05.png").default, address: "#" },
            { name: "王晓玉5", duration: "5年", img: require("../../../assets/teacherList/teacher5_05.png").default, address: "#" },
        ]
    }
    render() {
        const { list } = this.state;
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
