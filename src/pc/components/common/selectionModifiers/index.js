import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { message, Popconfirm } from 'antd';

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
let deleteMessage = null;
let addComponentMessage = null;
export default class selectionModifiers extends Component {
    state = {
        selectedActiveObj: null,
        addModuleIndexed: null
    }
    componentDidMount() {
        //订阅消息 - 当悬浮选中组件时传过来的 activeobj信息
        changeActiveObj = PubSub.subscribe('getActiveObj', (msg, data) => {
            this.setState({
                selectedActiveObj: data
            })
        });
        //订阅- 增加组件 替换占位元素
        addComponentMessage = PubSub.subscribe('addComponent', (msg, data) => {
            const { selectedActiveObj, addModuleIndexed } = this.state;
            const { component, info } = data
            if (addModuleIndexed === null) {
                window.parent.PubSub.publish('operationMessage', {
                    message: '请先选择添加组件',
                    type: 'warning'
                })
                return false;
            }
            let obj = {
                "component": component,
                "props": info
            }
            selectedActiveObj.componentJson.splice(addModuleIndexed + 1, 1, obj)
            this.setState({
                addModuleIndexed: null,
                selectedActiveObj
            })
            console.log(selectedActiveObj.componentJson)
            PubSub.publish('getChangeComponentData', selectedActiveObj);
        });
    }
    componentWillUnmount() {
        // 组件销毁后去除订阅消息
        PubSub.unsubscribe(changeActiveObj);
        PubSub.unsubscribe(addComponentMessage);
    }
    reviseModule = () => {
        const { selectedActiveObj } = this.state;
        //发布消息 - 点击编辑组件把activeobj信息 传递给顶层编辑器页面
        if (!selectedActiveObj) {
            message.warning('请先选择组件');
            return false;
        }
        window.parent.PubSub.publish('selectPageComponent', selectedActiveObj);
    }
    moveModule = (type) => {
        return () => {
            //移动模块
            let { selectedActiveObj } = this.state,
                { num, componentJson } = selectedActiveObj;

            num *= 1;
            if (type === 'down') {
                //下移模块
                if (num + 1 === componentJson.length) {
                    message.warning('已经是最后一位');
                    return false;
                }
                //两个数组子元素换位置
                componentJson[num] = componentJson.splice(num + 1, 1, componentJson[num])[0];
                //传送修改后的数据
                PubSub.publish('getChangeComponentData', selectedActiveObj);
            }
            if (type === 'up') {
                //上移模块
                if (num === 0) {
                    message.warning('已经是第一位');
                    return false;
                }
                componentJson[num] = componentJson.splice(num - 1, 1, componentJson[num])[0];
                //传送修改后的数据
                PubSub.publish('getChangeComponentData', selectedActiveObj);
            }
        }
    }
    deleteModule = () => {
        //删除模块
        let { selectedActiveObj } = this.state,
            { num, componentJson } = selectedActiveObj;
        componentJson.splice(num, 1);
        PubSub.publish('getChangeComponentData', selectedActiveObj);//传送修改后的数据
    }
    addModule = () => {
        //一个页面中只允许一个添加模块的加入
        const { addModuleIndexed } = this.state;
        if (addModuleIndexed) {
            window.parent.PubSub.publish('operationMessage', { type: "warning", message: "请先处理已存在的组件占位元素" });
            return
        }

        //添加模块
        let { selectedActiveObj } = this.state,
            { num, componentJson } = selectedActiveObj,
            addModule = {
                component: 'AddModule'
            }
        num *= 1;
        componentJson.splice(num + 1, 0, addModule);
        PubSub.publish('getChangeComponentData', selectedActiveObj);//传送修改后的数据
        //addModuleIndexed只记录有没有站为元素  只在添加模块流程中开头判断用
        this.setState({
            addModuleIndexed: num
        })
        this.subscribeDeleteModule(num)
    }
    subscribeDeleteModule = (num) => {
        let { selectedActiveObj } = this.state,
            { componentJson } = selectedActiveObj;
        // 订阅消息 - 添加模块会再页面中增加一个占位组件 点击取消或添加模块成功后删除该订阅
        deleteMessage = PubSub.subscribe('deleteAddModule', (msg, data) => {
            const { type } = data
            if (type === 'close') {
                componentJson.splice(num + 1, 1);
                PubSub.publish('getChangeComponentData', selectedActiveObj);//传送修改后的数据
            }
            //执行后删除订阅
            PubSub.unsubscribe(deleteMessage);

            //去除占位元素记录
            this.setState({
                addModuleIndexed: null
            })
        });
    }
    render() {
        const { info } = this.props
        return (
            <div className="control_toolSuspension" style={info}>
                <div className="toolContent">
                    <span onClick={this.reviseModule} className="font">编辑模块</span>
                    <PlusOutlined title="添加模块" className="icon" onClick={this.addModule} />
                    <ArrowDownOutlined title="下移模块" className="icon" onClick={this.moveModule('down')} />
                    <ArrowUpOutlined title="上移模块" className="icon" onClick={this.moveModule('up')} />
                    {/* <EyeInvisibleOutlined title="隐藏模块"  className="icon"/> */}
                    <Popconfirm placement="left" title="是否删除选中模块？" onConfirm={this.deleteModule} okText="是" cancelText="否">
                        <DeleteOutlined title="删除模块" className="icon" />
                    </Popconfirm>
                </div>
            </div>
        )
    }
}
