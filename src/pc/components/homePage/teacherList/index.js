import React, { Component } from 'react'
import { Carousel } from 'antd';
import './style.scss'

import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;
export default class teacherList extends Component {
    state = {
        list: [
            {
                info: [
                    { img: require('../../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                    { img: require('../../../assets/homePage/teacher/teacher2.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                    { img: require('../../../assets/homePage/teacher/teacher3.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                    { img: require('../../../assets/homePage/teacher/teacher4.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                    { img: require('../../../assets/homePage/teacher/teacher5.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                ]
            },
            {
                info: [
                    { img: require('../../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                    { img: require('../../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                    { img: require('../../../assets/homePage/teacher/teacher1.png').default, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "/" },
                ]
            },
        ]
    }
    render() {
        const { list } = this.props.length ? this.props : this.state;
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="scale" duration="1000" className="teacherListLoop-antMotion-box">
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
                        <a href="/home" className="link">查看更多</a>
                    </div>
                </QueueAnim>
            </ScrollOverPack>
        )
    }
}
