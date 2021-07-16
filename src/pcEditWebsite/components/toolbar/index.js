import React, { Component } from 'react'
import { AppstoreFilled, SettingFilled } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import './style.scss'

export default class toolbar extends Component {
    state = {
        list: [
            {
                icon: <AppstoreFilled />,
                text: "模块"
            },
            // {
            //     icon: <FormatPainterFilled />,
            //     text: "样式"
            // },
            {
                icon: <SettingFilled />,
                text: "设置"
            }
        ]
    }
    onTransitionEnd = (e) => {
        e.target.querySelector('.text').style.display = 'block';
    }
    awakenModalWindow = (num) => {
        return () => {
            PubSub.publish('showModalWindow', { select: num, isShow: true });
        }
    }
    render() {
        const { list } = this.state;
        return (
            <div className="control_leftToolBar">
                {
                    list.map((item, index) => {
                        return <div onTransitionEnd={this.onTransitionEnd} key={index} onClick={this.awakenModalWindow(index)}>
                            {item.icon}
                            <span className="text">{item.text}</span>
                        </div>
                    })
                }
            </div>
        )
    }
}
