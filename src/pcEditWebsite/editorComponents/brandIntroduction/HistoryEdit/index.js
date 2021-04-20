import React, { Component } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import PubSub from 'pubsub-js'
import './style.scss'

let imgMessage = null,
    textMessage = null;
export default class HistoryEdit extends Component {
    state = {
        indexed: 0,
        level2: null
    }
    switchTime = (num) => {
        //切换选中的历史时间
        return () => {
            this.setState({
                indexed: num,
                level2: null
            })
        }
    }
    addTime = () => {
        //增加时间年份数据
        const obj = {
            "time": 2099,
            "info": [
                {
                    "type": "text",
                    "text": "1、3月20日，桔子树七周年庆典，七百余名教职员工在朝阳区蓝调薰衣草庄园共同庆祝"
                }
            ]
        },
            { props: { data } } = this.props.detail[0];
        data.push(obj);
        this.setState({})
    }
    changeLevel1Time = (e) => {
        //修改一级 时间年份
        const { indexed } = this.state,
            { props: { data } } = this.props.detail[0];
        if (indexed === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
            return;
        }
        data[indexed].time = e.target.value;
        this.setState({})
    }
    deleteLevel1 = (e) => {
        //删除一级历史历程表
        e.stopPropagation();
        const { props: { data } } = this.props.detail[0],
            { indexed } = this.state;

        data.splice(indexed, 1);
        this.setState({
            indexed: null,
            level2: null
        })
    }

    //二级操作
    switchLevel2 = (num) => {
        //二级切换选中
        return () => {
            this.setState({
                level2: num
            })
        }
    }
    level2Node = (data, num) => {
        //检索type返回对应节点
        const { type, text } = data;
        if (type === 'img') {
            return <img src={data.img} alt="" />
        }
        if (type === 'text') {
            return <p>{text}</p>
        }
    }
    addTimeData = () => {
        //增加二级数据
        const obj = {
            "type": "text",
            "text": "文案"
        },
            { indexed } = this.state,
            { props: { data: list } } = this.props.detail[0];
        list[indexed].info.push(obj);
        this.setState({})
    }
    chaneImage = () => {
        //修改图片或增加图片
        const { indexed, level2 } = this.state,
            { props: { data } } = this.props.detail[0];
        if (indexed === null || level2 === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
            return;
        }
        //唤醒图片库
        PubSub.publish('awakenPhotoGallery', true);

        //订阅 - 更改图片后回调
        imgMessage = PubSub.subscribe('transmitSelectedImg', (msg, imgData) => {
            data[indexed].info[level2].img = imgData;
            data[indexed].info[level2].type = 'img';
            this.setState({})
        });
    }

    awakenRichText = () => {
        const { indexed, level2 } = this.state,
            { props: { data: list } } = this.props.detail[0];

        if (indexed === null || level2 === null) {
            PubSub.publish('operationMessage', { type: 'warning', message: "请先选择更改的数据" });
            return;
        }
        //唤醒富文本编辑器并传值
        PubSub.publish('awakenRichTextEditor', { isShow: true, text: list[indexed].info[level2].text });
        //订阅 - 接收修改后的富文本值
        textMessage = PubSub.subscribe('amendRichText', (msg, data) => {
            let str = data.replace(/<\/?p>/g, '');
            list[indexed].info[level2].text = str;
            this.setState({})
        });
    }
    deleteLevel2 = (e) => {
        e.stopPropagation();
        //删除二级 数据
        const { props: { data } } = this.props.detail[0],
            { indexed, level2 } = this.state;
        data[indexed].info.splice(level2, 1);
        this.setState({
            level2: null
        })
    }

    changeData = () => {
        //传递修改后的数据
        const { detail } = this.props;
        PubSub.publish('revisedDataList', detail);
    }
    componentWillUnmount() {
        //卸载订阅
        PubSub.unsubscribe(textMessage);
        PubSub.unsubscribe(imgMessage);
    }
    render() {
        const { props: { data } } = this.props.detail[0],
            { indexed, level2 } = this.state;
        console.log(data)
        return (
            <div className="HistoryEdit">
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>选择时间：</span></label>
                </div>
                <ul className="level">
                    {
                        data.map((item, index) => {
                            return <li className={indexed !== null && indexed === index ? 'active' : ''} key={index} onClick={this.switchTime(index)}>{item.time}
                                <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteLevel1} okText="是" cancelText="否">
                                    <CloseCircleOutlined />
                                </Popconfirm>
                            </li>
                        })
                    }
                    <li className="add" onClick={this.addTime}>+</li>
                </ul>
                <div className="input_box">
                    <label><span>更改时间：</span><input type="text" name="level1Text" key={indexed} defaultValue={indexed !== null ? data[indexed].time : ''} placeholder="请输入文字" onChange={this.changeLevel1Time} /></label>
                </div>
                <div className="input_box" style={{ marginBottom: '10px' }}>
                    <label ><span>选择数据：</span></label>
                </div>
                {
                    indexed !== null ?
                        <ul className="level level2">
                            {
                                data[indexed].info.map((item, index) => {
                                    return <li className={level2 === index ? 'active' : ''} key={index} onClick={this.switchLevel2(index)}>
                                        <Popconfirm placement="rightTop" title="确认删除？" onConfirm={this.deleteLevel2} okText="是" cancelText="否">
                                            <CloseCircleOutlined />
                                        </Popconfirm>
                                        {this.level2Node(item, index)}
                                    </li>
                                })
                            }
                            <li className="add" onClick={this.addTimeData}>+</li>
                        </ul> : null
                }
                {
                    level2 !== null && indexed !== null ?
                        <div>
                            <div className="input_box">
                                <span>更改文案：</span><button className="changeImg" onClick={this.awakenRichText}>点击更改</button>
                            </div>
                            <div className="input_box">
                                <span>{data[indexed].info[level2].type === 'img' ? '更改图片' : '添加图片'}：</span><button className="changeImg" onClick={this.chaneImage}>{data[indexed].info[level2].type === 'img' ? '点击更改图片' : '点击添加图片'}</button>
                            </div>
                        </div>
                        : null
                }
                <div className="changeComponentConf">
                    <button onClick={this.changeData} >确认</button>
                </div>
            </div>
        )
    }
}