import React, { Component } from 'react'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './style.scss'
import img1 from '@assets/homePage/gloryList/perform1.png'
import img2 from '@assets/homePage/gloryList/perform2.png'
import symbol1 from '@assets/homePage/gloryList/symbol1.png'
import symbol2 from '@assets/homePage/gloryList/symbol2.png'

import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;
export default class gloryList extends Component {
    carousel = React.createRef()
    state = {
        detail: [
            [
                { id: 1, src: img1, title: "桔子树4岁小学员登上央视舞台", detail: "桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台" },
                { id: 2, src: img2, title: "桔子树5岁小学员登上央视舞台", detail: "桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台" },
            ],
            [
                { id: 3, src: img2, title: "桔子树6岁小学员登上央视舞台", detail: "桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台" },
                { id: 4, src: img1, title: "桔子树7岁小学员登上央视舞台", detail: "桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台桔子树4岁小学员登上央视舞台" },
            ]
        ]
    }
    nextModule = () => {
        this.carousel.current.next();
    }
    prevModule = () => {
        this.carousel.current.prev();
    }
    render() {
        const { detail } = this.state;
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="bottom" duration="1000" className="gloryList-antMotion-box">
                    <div className="gloryList" key="gloryList">
                        <div className="listBox">
                            <Carousel ref={this.carousel}>
                                {
                                    detail.map((item, index) => {
                                        return <div key={index}>
                                            {
                                                item.map((data, j) => {
                                                    return <div className="glory" key={j}>
                                                        <img src={data.src} alt="" />
                                                        <div className="infoContainer">
                                                            <p className="flag">{data.id}</p>
                                                            <p className="title">{data.title}</p>
                                                            <p className="detail">
                                                                <img src={symbol1} alt="" />
                                                                <img src={symbol2} alt="" />
                                                                {data.detail}
                                                            </p>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    })
                                }
                            </Carousel>
                            <p className="ctrolButton next" onClick={this.nextModule}><RightOutlined /></p>
                            <p className="ctrolButton prev" onClick={this.prevModule}><LeftOutlined /></p>
                        </div>
                        <a href="/home" className="link">查看更多</a>
                        <div className="background"></div>
                    </div>
                </QueueAnim>
            </ScrollOverPack>
        )
    }
}
