import React, { Component } from 'react'
import { Carousel } from 'antd';
import './style.scss'
import teacher1 from '@assets/homePage/teacher/teacher1.png'
import teacher2 from '@assets/homePage/teacher/teacher2.png'
import teacher3 from '@assets/homePage/teacher/teacher3.png'
import teacher4 from '@assets/homePage/teacher/teacher4.png'
import teacher5 from '@assets/homePage/teacher/teacher5.png'

import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;
export default class teacherList extends Component {
    state = {
        list: [
            {
                ary: [
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher2, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher3, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher4, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher5, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                ]
            },
            {
                ary: [
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                ]
            },
            {
                ary: [
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                    { img: teacher1, name: "余子涵", duration: "5年", course: "现代舞、芭蕾舞、古典舞、民族舞、流行舞等", adress: "www.baidu.com" },
                ]
            },
        ]
    }
    render() {
        const { list } = this.state;
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="scale" duration="1000" className="teacherListLoop-antMotion-box">
                    <div className="teacherListLoop" key="teacherListLoop">
                        <Carousel className="teacherBox">
                            {
                                list.map((item, index) => {
                                    return <div key={index}>
                                        {
                                            item.ary.map((data, j) => {
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
