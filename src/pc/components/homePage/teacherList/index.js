import React, { Component } from 'react'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
import './style.scss'

import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;
export default class teacherList extends Component {
    state = {
        list: [
            {
                info: [
                    { img: require('../../../assets/homePage/teacher/teacher1.png').default, name: "许杨", duration: "9年", course: "童声、美声、民族、通俗唱法", adress: "/site/pc/aboutUs/teachers/detail/1" },
                    { img: require('../../../assets/homePage/teacher/teacher2.png').default, name: "孙亚秋", duration: "4年", course: "儿童画，创意美术，水彩，水粉，素描，彩铅，油画等", adress: "/site/pc/aboutUs/teachers/detail/2" },
                    { img: require('../../../assets/homePage/teacher/teacher3.png').default, name: "孟繁颖", duration: "7年", course: "古典舞、芭蕾舞、民族民间舞、爵士舞、踢踏舞、肚皮舞", adress: "/site/pc/aboutUs/teachers/detail/3" },
                    { img: require('../../../assets/homePage/teacher/teacher4.png').default, name: "任雅臣", duration: "5年", course: "流行声乐、音基", adress: "/site/pc/aboutUs/teachers/detail/4" },
                    { img: require('../../../assets/homePage/teacher/teacher5.png').default, name: "向定军", duration: "5年", course: "架子鼓、架子鼓考级、少儿架子鼓等", adress: "/site/pc/aboutUs/teachers/detail/5" },
                ]
            }
        ]
    }
    render() {
        const { list, style } = this.props?.list ? this.props : this.state;
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="scale" duration="1000" className="teacherListLoop-antMotion-box" style={{ ...style }}>
                    <div className="teacherListLoop" key="teacherListLoop">
                        <Carousel className="teacherBox">
                            {
                                list.map((item, index) => {
                                    return <div key={index}>
                                        {
                                            item.info.map((data, j) => {
                                                return <div className="teacher" key={j}>
                                                    <a href={data.adress}>
                                                        <img src={data.img} alt="" />
                                                        <h3>{data.name}</h3>
                                                        <p>
                                                            <em>教龄</em>：<span>{data.duration}</span>
                                                        </p>
                                                        <p className="text">
                                                            <em>教学课程</em>：<span>{data.course}</span>
                                                        </p>
                                                    </a>
                                                </div>
                                            })
                                        }
                                    </div>
                                })
                            }
                        </Carousel>
                        <Link to="/site/pc/aboutUs/teachers" className="link">查看更多</Link>
                    </div>
                </QueueAnim>
            </ScrollOverPack>
        )
    }
}
