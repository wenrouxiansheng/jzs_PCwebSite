import React, { Component } from 'react'
import './style.scss'
import img from '../../../assets/aboutUs/studentHonor/honor1.png'
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;

export default class imgTextCrossing extends Component {
    state = {
        list: [
            { img: require('../../../assets/aboutUs/studentHonor/honor1.png').default },
            { title: '花儿朵朵少儿舞蹈展演', subTitle: '中国舞蹈家协会主办，桔子树学员获多项殊荣' },
            { img: require('../../../assets/aboutUs/studentHonor/honor2.png').default },
            { title: '李斯特怀香港国际钢琴公开赛', subTitle: '桔子树学员登上世界级舞台，在国家未来大剧院奏响华美乐章' },
            { title: '海外桃李杯国际舞蹈大赛', subTitle: '桔子树学员绽放“海外桃李杯”舞蹈大赛，获得多项大奖' },
            { img: require('../../../assets/aboutUs/studentHonor/honor3.png').default },
            { title: '金桔杯艺术大赛', subTitle: '桔子树主办，连续三届被纳入由北京市文资办主办的北京惠民文化消费季' },
            { img: require('../../../assets/aboutUs/studentHonor/honor4.png').default },
        ]
    }
    render() {
        const { list } = this.state;
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="scaleX" duration="1000" className="imgTextCrossing imgTextCrossing-antMotion-box">
                    {
                        list.map((item, index) => {
                            if (item.img) {
                                return <div key={index}>
                                    <img src={item.img} alt="" />
                                </div>
                            } else {
                                return <div key={index}>
                                    <h1>{item.title}</h1>
                                    <h3>{item.subTitle}</h3>
                                </div>
                            }
                        })
                    }
                </QueueAnim>
            </ScrollOverPack>
        )
    }
}
