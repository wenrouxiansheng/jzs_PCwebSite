import React, { Component } from 'react'
import './style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { Link } from 'react-router-dom'
import 'swiper/swiper.scss';

SwiperCore.use([Pagination]);
export default class ZoomHonorImage extends Component {
    state = {
        backgroundImage: require('../../../assets/homepage/zoom/ppBg.png').default,
        list: [
            { img: require('../../../assets/homepage/zoom/glory1.png').default, address: "#", text: "2018北京文化创意大赛 全国总决赛二等奖" },
            { img: require('../../../assets/homepage/zoom/glory2.png').default, address: "#", text: "2018通州文创产业人才提升计划路演展示一等奖" },
            { img: require('../../../assets/homepage/zoom/glory3.png').default, address: "#", text: "2018世界移动互联网大会最具品牌影响力企业" },
            { img: require('../../../assets/homepage/zoom/glory4.png').default, address: "#", text: "百度教育2017年度教育行业典范" },
            { img: require('../../../assets/homepage/zoom/glory5.png').default, address: "#", text: "网易教育2014年度最具影响力教育集团" },
            { img: require('../../../assets/homepage/zoom/glory6.png').default, address: "#", text: "腾讯大燕网京津冀十佳教育辅导机构" }
        ]
    }

    imageNode = (item, index) => {//单节点
        return <SwiperSlide className="swiper-vague" key={index}>
            <Link to={item.address}>
                <img src={item.img} alt="" />
                <div className="text">{item.text}</div>
            </Link>
        </SwiperSlide>
    }
    render() {

        const { backgroundImage, list } = this.state;

        const node = list.map((item, index) => {
            return this.imageNode(item, index);
        })

        let num = document.querySelector('html')?.style?.fontSize?.split('px')[0] || 50;
        return (
            <Swiper
                width={2.7 * num * 3}
                centeredSlides={true}
                centeredSlidesBounds={true}
                slidesPerView={'auto'}
                slidesOffsetBefore={-(0.3 * num)}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.swiper-pagination'
                }}
                style={{ backgroundImage: `url(${backgroundImage})` }}
                className="zoomHonorImage"
            >
                <div className="swiper-pagination"></div>
                {node}
            </Swiper>

        )
    }
}
