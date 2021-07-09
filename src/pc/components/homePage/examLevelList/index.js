import React, { Component } from 'react'
import './style.scss'
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom'

const ScrollOverPack = ScrollAnim.OverPack;
export default class examLevelList extends Component {
    render() {
        const { list, style } = this.props;
        return (
            <ScrollOverPack always={false} >
                <QueueAnim type="right" duration="1000" className="examLevelList-antMotion-box" style={{ ...style }}>
                    <div className="examLevelList" key="examLevelList">
                        {
                            list.map((item, index) => {
                                return <Link to={item.adress} key={index} target="_blank">
                                    <div className="container">
                                        <img src={item.src} alt="" />
                                        <p className="titleBlock">
                                            <span>{item.text}</span>
                                            <span>{item.subText}</span>
                                            <button>了解更多</button>
                                        </p>
                                    </div>
                                </Link>
                            })
                        }
                    </div >
                </QueueAnim>
            </ScrollOverPack>
        )
    }
}
