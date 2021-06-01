import React, { Component } from 'react'
import './style.scss'

import { CloseCircleOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { Popconfirm } from 'antd';

export default class learningGoalEdit extends Component {
    state = {
        indexed: null
    }
    changeInfoText = (type) => {
        return (e) => {
            const { props: { info } } = this.props.detail[0];
            info[type] = e.target.value;
            this.setState({})
        }
    }
    switchData = (num) => {
        //切换选中
        return () => {
            this.setState({
                indexed: num
            })
        }
    }
    deleteData = (e) => {
        e.stopPropagation();
        //删除数据
        const { props: { textList } } = this.props.detail[0],
            { indexed } = this.state;
        textList.splice(indexed, 1);
        this.setState({
            indexed: null
        })
    }
    addDate = () => {
        //增加数据
        const { props: { textList } } = this.props.detail[0];
        if (textList.length >= 9) {
            PubSub.publish('operationMessage', { type: 'warning', message: "已达到数据上限，不可增加" });
            return false;
        }
        textList.push('文案');
        this.setState({})
    }
    changeTextList = (e) => {
        //修改目标
        const { props: { textList } } = this.props.detail[0],
            { indexed } = this.state;
        textList[indexed] = e.target.value;
    }
    changeData = () => {
        //传递修改的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    render() {
        const { props: { info, textList } } = this.props.detail[0],
            { indexed } = this.state;
        return (
            <div className="learningGoalEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>组件标题：</span></label>
                </div>
                <div className="input_box">
                    <label><span>标题：</span><input type="text" name="title" placeholder="请输入文字" onChange={this.changeInfoText('title')} defaultValue={info.title} /></label>
                </div>
                <div className="input_box">
                    <label><span>副标题：</span><input type="text" name="subTitle" placeholder="请输入文字" onChange={this.changeInfoText('subTitle')} defaultValue={info.subTitle} /></label>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span style={{ width: "220px" }}>选择修改数据（数量不大于9）：</span></label>
                </div>
                <ul className="level">
                    {
                        textList.map((item, index) => {
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
                    <label><span>文案：</span><input type="text" name="font" placeholder="请输入文字" onChange={this.changeTextList} key={indexed} defaultValue={textList[indexed]} /></label>
                </div>
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}
