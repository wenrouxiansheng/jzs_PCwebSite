import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import './style.scss'
import { FileAddOutlined } from '@ant-design/icons';

export default class addModule extends Component {
    closeAddModule = () => {
        PubSub.publish('deleteAddModule', {
            type: 'close'
        });
    }
    openModuleWindow = () => {
        //唤醒模态窗  - 组件列表
        window.parent.PubSub.publish('showModalWindow', { select: 0, isShow: true });//select表示悬浮窗显示第一个模块
    }
    render() {
        return (
            <div className="addModule">
                <p onClick={this.openModuleWindow}><FileAddOutlined />添加模块</p>
                <p onClick={this.closeAddModule}>取消</p>
            </div>
        )
    }
}
