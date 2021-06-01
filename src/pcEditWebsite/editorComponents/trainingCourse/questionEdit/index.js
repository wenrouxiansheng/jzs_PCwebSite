import React, { Component } from 'react'
import './style.scss'

import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';


export default class questionEdit extends Component {
    state = {
        indexed: null
    }
    switchData = (num) => {
        return () => {
            //切换选中样式
            this.setState({
                indexed: num
            })
        }
    }
    deleteData = (e) => {
        //删除数据
        e.stopPropagation();
        const { props: { questionList: data } } = this.props.detail[0],
            { indexed } = this.state;
        data.splice(indexed, 1);
        this.setState({
            indexed: null
        })
    }
    addDate = () => {
        const { props: { questionList: data } } = this.props.detail[0],
            str = '文案';
        data.push(str);
        this.setState({})
    }
    changeText = (e) => {
        //修改文案
        const { props: { questionList: data } } = this.props.detail[0],
            { indexed } = this.state;
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择修改的数据" });
            return false;
        }
        data[indexed] = e.target.value;
        this.setState({})
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    render() {
        const { props: { questionList: data } } = this.props.detail[0],
            { indexed } = this.state;
        return (
            <div className="questionEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>列表：</span></label>
                </div>
                <ul className="level">
                    {
                        data.map((item, index) => {
                            return <li className={indexed === index ? 'active' : ''} key={index} onClick={this.switchData(index)}>
                                <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteData} okText="是" cancelText="否">
                                    <CloseCircleOutlined />
                                </Popconfirm>
                                {item}</li>
                        })
                    }
                    <li className="add" onClick={this.addDate}>+</li>
                </ul>
                <div className="input_box">
                    <label><span>文案：</span><textarea defaultValue={indexed !== null ? data[indexed] : ''} placeholder="请输入" onChange={this.changeText}></textarea> </label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
