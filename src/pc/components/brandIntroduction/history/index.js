import React, { Component } from 'react'
import { Timeline } from 'antd';
import './style.scss'
import historyData from '../../../../wap/beijing/public/historyData'

export default class history extends Component {
    state = {
        indexed: 0,
    }
    switchData = () => {
        const { indexed } = this.state;
        let str = ''
        historyData[indexed].info.forEach((item, index) => {
            if (item.type === 'text') {
                str += item.text + '<br />'
            }
            if (item.type === 'img') {
                str += `<div class="img_text">
                <img src=${item.src} alt="" />
                <span>${item.text}</span>
            </div>`
            }
        })
        return str;
    }
    switchHistory = (indexed) => {
        return () => {
            this.setState({
                indexed
            })
        }
    }
    render() {
        const { indexed } = this.state;
        return (
            <div className="developmentHistory">
                <Timeline className="nav">
                    {
                        historyData.map((item, index) => {
                            return <Timeline.Item key={index}>
                                <h1 className={indexed === index ? 'active' : ''} onClick={this.switchHistory(index)}>{item.time}</h1>
                            </Timeline.Item>
                        })
                    }
                </Timeline>
                <div className="container" key={indexed} dangerouslySetInnerHTML={{ __html: this.switchData() }}>
                </div>
            </div>
        )
    }
}
