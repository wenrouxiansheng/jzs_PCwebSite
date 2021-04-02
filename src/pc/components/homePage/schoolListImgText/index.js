import React, { Component } from 'react'
import './style.scss'
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import tel from '@assets/homePage/schoolList/tellWhite.png'
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;
export default class schoolListImgText extends Component {
    state = {
        list: {
            src: require('../../../assets/homePage/schoolList/schoolBanner.png').default,
            title: "桔子树——中国艺术教育素质教育品牌",
            smallList: [
                {
                    src: require('../../../assets/homePage/schoolList/school1.jpg').default,
                    name: "通州校区",
                    tel: "400-900-8898"
                },
                {
                    src: require('../../../assets/homePage/schoolList/school2.jpg').default,
                    name: "大望路校区",
                    tel: "400-900-8898"
                },
                {
                    src: require('../../../assets/homePage/schoolList/school3.jpg').default,
                    name: "中关村校区",
                    tel: "400-900-8898"
                },
                {
                    src: require('../../../assets/homePage/schoolList/school3.jpg').default,
                    name: "中关村校区",
                    tel: "400-900-8898"
                },
                {
                    src: require('../../../assets/homePage/schoolList/school3.jpg').default,
                    name: "中关村校区",
                    tel: "400-900-8898"
                },
            ]
        },
        num: 0,
        offSet: 0
    }
    switchList = (type) => {
        return () => {
            let { num, list } = this.state;
            if (type === 'top') {//上一个
                if (num <= 0) return;
                num--;
                this.setState({
                    num,
                    offSet: (10 + 173) * num
                })
            }
            if (type === 'bottom') {//下一个
                let len = list.smallList.length;
                if (len > 3) {
                    if (num + 3 >= len) return;
                    num++;
                    this.setState({
                        num,
                        offSet: (10 + 173) * num
                    })
                }
            }
        }
    }
    render() {
        const { list, num, offSet } = this.state;
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="scale" duration="1000" className="schoolListImgText-antMotion-box">
                    <div className="schoolListImgText" key="schoolListImgText">
                        <div className="bigImg">
                            <img src={list.src} alt="" />
                            <h1>{list.title}</h1>
                            <p className="top" onClick={this.switchList('top')}><UpOutlined /></p>
                            <p className="bottom" onClick={this.switchList('bottom')}><DownOutlined /></p>
                        </div>
                        <div className="smallImg" flag={num} style={{ transform: `translateY(-${offSet}px)` }}>
                            {
                                list.smallList.map((item, index) => {
                                    return <div className="smalllBox" key={index}>
                                        <img src={item.src} alt="" />
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p><img src={tel} alt="" /><span>{item.tel}</span></p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </QueueAnim>
            </ScrollOverPack>
        )
    }
}