import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';

import switchComponentEdit from '../../../editorComponents/allEditor'
import './style.scss'
import { containerStatus } from '../../../../store/store'

let addContainerMessage = null;
export default class componentContainerEdit extends Component {
    state = {
        indexed: null
    }
    componentDidMount() {
        //订阅   - 往组件容器中添加组件
        addContainerMessage = PubSub.subscribe('addComponentContainer', (msg, data) => {
            if (!containerStatus.getState()) {//严谨判断  组件容器编辑true才可更改
                PubSub.publish('operationMessage', {
                    message: '组件容器消息addComponentContainer泄露',
                    type: 'error'
                });
                return false;
            }
            const { props: { components } } = this.props.detail[0];
            components.push(data)
            this.setState({})
        });
    }
    switchComponent = (num) => {
        //切换选中组件样式
        return () => {
            this.setState({
                indexed: num
            })
        }
    }
    deleteComponent = (e) => {
        //删除组件
        e.stopPropagation();
        const { props: { components } } = this.props.detail[0],
            { indexed } = this.state;
        components.splice(indexed, 1);
        this.setState({})
    }
    addComponent = () => {
        //添加组件
        PubSub.publish('showModalWindow', { select: 0, isShow: true });
    }
    changeData = () => {
        //更新数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    componentWillUnmount() {
        //组件销毁去除订阅
        PubSub.unsubscribe(addContainerMessage);
    }
    render() {
        const { props: { components } } = this.props.detail[0],
            { indexed } = this.state;
        console.log(components)
        return (
            <div className="componentContainerEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>组件列表：</span></label>
                </div>
                <ul className="level">
                    {
                        components.map((item, index) => {
                            return <li className={indexed === index ? 'active' : ''} key={index} onClick={this.switchComponent(index)}>
                                <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteComponent} okText="是" cancelText="否">

                                    <CloseCircleOutlined />

                                </Popconfirm>
                                {item.component}
                            </li>
                        })
                    }
                    <li className="add" onClick={this.addComponent}>+</li>
                </ul>
                {
                    indexed !== null ? switchComponentEdit([components[indexed]]) : null
                }
                <div className="changeComponentConf">
                    <button onClick={this.changeData}>确认</button>
                </div>
            </div>
        )
    }
}
