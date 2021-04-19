import React, { Component } from 'react'
import './style.scss'
import ZoomCarousel from './zoomCarousel'
import Title from '@components/homePage/title'


export default class classScene extends Component {
    state = {
        data: {
            info: {
                title: "快乐课堂", subTitle: "Happy Classroom"
            },
            text: "桔子树艺术开设的艺术课程全面，上课时间灵活有弹性。尤其是在少儿艺术教学中，引入<span>“奥尔夫音乐教学法”</span>到课堂中，教学游戏化，使孩子们玩游戏中高高兴兴地学习音乐，增强孩子的学习兴趣，实践证明这是非常有效的教学方式。",
            imgList: [
                { src: require('../../../../assets/brandIntroduction/classScene/swiper1.png').default },
                { src: require('../../../../assets/brandIntroduction/classScene/swiper2.png').default },
                { src: require('../../../../assets/brandIntroduction/classScene/swiper3.png').default },
                { src: require('../../../../assets/brandIntroduction/classScene/swiper4.png').default },
                { src: require('../../../../assets/brandIntroduction/classScene/swiper5.png').default },
            ]
        }
    }

    render() {
        const { data: { info, text, imgList } } = this.props.length ? this.props : this.state;
        return (
            <div className="classScene">
                <div className="container">
                    <Title info={info} />
                    <p dangerouslySetInnerHTML={{ __html: text }}></p>
                    <ZoomCarousel list={imgList} />
                </div>
            </div>
        )
    }
}
