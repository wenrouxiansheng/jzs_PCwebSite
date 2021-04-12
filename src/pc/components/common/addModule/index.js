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
    render() {
        return (
            <div className="addModule">
                <p><FileAddOutlined />添加模块</p>
                <p onClick={this.closeAddModule}>取消</p>
            </div>
        )
    }
}
