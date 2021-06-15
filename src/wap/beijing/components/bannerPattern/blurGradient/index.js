import React, { Component } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export default class BlurGradient extends Component {
    state = {
        list: [
            { img: require('../../../assets/homepage/show/honor4.png').default, title: "“青春风采”国际青少年艺术节开幕式", text: "桔子树学员登上亮相国家级艺术殿堂——北京音乐厅，绽放青春风采" },
            { img: require('../../../assets/homepage/show/honor3.png').default, title: "炫丽童年梦艺术大赛", text: "桔子树学员受关工委邀请参加全国总决赛，登上国家大剧院舞台" },
            { img: require('../../../assets/homepage/show/honor5.png').default, title: "世界华人青少年艺术节", text: "桔子树学员在北京选拔赛、马来西亚吉隆坡总决赛中大放异彩" },
            { img: require('../../../assets/homepage/show/honor1.png').default, title: "海外桃李杯国际舞蹈大赛", text: "桔子树学员绽放“海外桃李杯”舞蹈大赛，获得多项大奖" },
            { img: require('../../../assets/homepage/show/honor2.png').default, title: "花儿朵朵少儿舞蹈展演", text: "展演由中国舞蹈家协会主办，桔子树学员连续多届屡获殊荣" },
            { img: require('../../../assets/homepage/show/honor6.png').default, title: "李斯特杯香港国际钢琴公开赛", text: "桔子树学员登上世界级舞台，在国家未来大剧院歌剧厅奏响华美乐章" },
            { img: require('../../../assets/homepage/show/honor7.png').default, title: "金桔杯艺术大赛", text: "桔子树主办，连续三届被纳入由北京市文资办主办的北京惠民文化消费季" },
        ]
    }
    bannerNode = (item, index) => {
        const { img, title, text } = item;
        return <div className="swiper-vague animate__animated animate__fadeIn active" key={index}>
            <div className="flex_box">
                <Link to="#">
                    <img src={img} alt="" />
                </Link>
                <div className="text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <button className="prev">上一赛事</button>
                    <button className="next">下一赛事</button>
                    <em></em>
                </div>
            </div>
        </div>
    }
    render() {
        const { list } = this.state;
        const node = list.map((item, index) => {
            return this.bannerNode(item, index);
        })
        return (
            <div className="blurGradient">
                <div className="swiper-contentBox">
                    {node}
                </div>
                <div className="swiper-pagination">
                </div>
                <div className="filter"></div>
            </div>
        )
    }
}
