import React, { Component } from 'react'
import './style.scss'
import img from '../../../assets/aboutUs/studentHonor/honor1.png'
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;

export default class imgTextCrossing extends Component {
    state = {
        list: [
            {
                img: require('../../../assets/aboutUs/studentHonor/honor1.png').default,
                text: {
                    title: '花儿朵朵少儿舞蹈展演', subTitle: '中国舞蹈家协会主办，桔子树学员获多项殊荣'
                },
                type: "left"
            },
            {
                img: require('../../../assets/aboutUs/studentHonor/honor2.png').default,
                text: {
                    title: '李斯特怀香港国际钢琴公开赛', subTitle: '桔子树学员登上世界级舞台，在国家未来大剧院奏响华美乐章'
                },
                type: "left"
            },
            {
                img: require('../../../assets/aboutUs/studentHonor/honor3.png').default,
                text: {
                    title: '海外桃李杯国际舞蹈大赛', subTitle: '桔子树学员绽放“海外桃李杯”舞蹈大赛，获得多项大奖'
                },
                type: "right"
            },
            {
                img: require('../../../assets/aboutUs/studentHonor/honor4.png').default,
                text: {
                    title: '金桔杯艺术大赛', subTitle: '桔子树主办，连续三届被纳入由北京市文资办主办的北京惠民文化消费季'
                },
                type: "right"
            },
        ]
    }
    render() {
        const { list } = this.props?.list ? this.props : this.state;
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="scaleX" duration="1000" className="imgTextCrossing imgTextCrossing-antMotion-box">
                    {
                        list.map((item, index) => {
                            if (item.type === 'left') {
                                return <div key={index}>
                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <h1>{item.text.title}</h1>
                                        <h3 dangerouslySetInnerHTML={{ __html: item.text.subTitle }}></h3>
                                    </div>
                                </div>
                            }
                            if (item.type === 'right') {
                                return <div key={index}>
                                    <div>
                                        <h1>{item.text.title}</h1>
                                        <h3 dangerouslySetInnerHTML={{ __html: item.text.subTitle }}></h3>
                                    </div>
                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>
                                </div>
                            }
                            return <div>属性错误</div>
                        })
                    }
                </QueueAnim>
            </ScrollOverPack>
        )
    }
}
