import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { message } from 'antd';

import './style.scss'

import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    // EyeInvisibleOutlined,
    DeleteOutlined,
    PlusOutlined
} from '@ant-design/icons';
//悬浮选中组件 小浮窗
//这个组件只有在编辑模式下才会运行

let changeActiveObj = null;//存放订阅的消息 

export default class selectionModifiers extends Component {
    state = {
        selectedActiveObj: null
    }
    componentDidMount() {
        //订阅消息 - 当悬浮选中组件时传过来的 activeobj信息
        changeActiveObj = PubSub.subscribe('changeActiveObj', (msg, data) => {
            this.setState({
                selectedActiveObj: data
            })
        });
    }
    reviseModule = () => {
        const { selectedActiveObj } = this.state;
        //发布消息 - 点击编辑组件把activeobj信息 传递给顶层编辑器页面
        if (!selectedActiveObj){
            message.warning('请先选择组件');
            return false;
        }
        window.parent.PubSub.publish('changePageComponent', selectedActiveObj);
    }
    componentWillUnmount() {
        // 组件销毁后去除订阅消息
        PubSub.unsubscribe(changeActiveObj);
    }
    render() {
        const { info } = this.props
        return (
            <div className="control_toolSuspension" style={info}>
                <div className="toolContent">
                    <span onClick={this.reviseModule} className="font">编辑模块</span>
                    <PlusOutlined title="添加模块" className="icon" />
                    <ArrowDownOutlined title="下移模块" className="icon" />
                    <ArrowUpOutlined title="上移模块" className="icon" />
                    {/* <EyeInvisibleOutlined title="隐藏模块"  className="icon"/> */}
                    <DeleteOutlined title="删除模块" className="icon" />
                </div>
            </div>
        )
    }
}
