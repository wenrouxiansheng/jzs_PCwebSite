import React, { Component } from 'react'
import './style.scss'
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import tel from '@assets/homePage/schoolList/tellWhite.png'
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const ScrollOverPack = ScrollAnim.OverPack;
export default class schoolListImgText extends Component {
    state = {
        num: 0,
        offSet: 0
    }
    switchList = (type) => {
        return () => {
            let { num } = this.state;
            const { data: { smallList } } = this.props;
            if (type === 'top') {//上一个
                if (num <= 0) return;
                num--;
                this.setState({
                    num,
                    offSet: (10 + 173) * num
                })
            }
            if (type === 'bottom') {//下一个
                let len = smallList.list.length;
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
        const { num, offSet } = this.state;
        const { data, data: { smallList }, style } = this.props
        return (
            <ScrollOverPack always={false}>
                <QueueAnim type="scale" duration="1000" className="schoolListImgText-antMotion-box" style={{ ...style }}>
                    <div className="schoolListImgText" key="schoolListImgText">
                        <div className="bigImg">
                            <img src={data.src} alt="" />
                            <h1>{data.title}</h1>
                            <p className="top" onClick={this.switchList('top')}><UpOutlined /></p>
                            <p className="bottom" onClick={this.switchList('bottom')}><DownOutlined /></p>
                        </div>
                        <div className="smallImg" flag={num} style={{ transform: `translateY(-${offSet}px)` }}>
                            {
                                smallList.list.map((item, index) => {
                                    return <div className="smalllBox" key={index}>
                                        <img src={item.img} alt="" />
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p><img src={tel} alt="" /><span>{smallList.phone}</span></p>
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